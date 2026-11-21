
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Bookmark,
  BookmarkCheck,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

import {
  emergencyGuides,
  emergencyCategories,
} from "../data/emergencyGuides";

const STORAGE_KEY = "aidlink:saved-emergency-guides";

function EmergencyPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [savedOnly, setSavedOnly] = useState(false);

  const [savedIds, setSavedIds] = useState(() => {
    try {
      const stored = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );
      return Array.isArray(stored) ? stored : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(savedIds)
      );
    } catch (error) {
      console.warn("Could not save bookmarks", error);
    }
  }, [savedIds]);

  function toggleBookmark(id) {
    setSavedIds((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  }

  const filteredGuides = emergencyGuides.filter((guide) => {
    const query = search.trim().toLowerCase();

    const matchesSearch = [
      guide.title,
      guide.summary,
      ...guide.steps,
    ]
      .join(" ")
      .toLowerCase()
      .includes(query);

    const matchesCategory =
      category === "all" || guide.category === category;

    const matchesSaved =
      !savedOnly || savedIds.includes(guide.id);

    return matchesSearch && matchesCategory && matchesSaved;
  });

  return (
    <div className="emergency-page container">
      <section className="emergency-hero">
        <p className="eyebrow">
          <ShieldAlert size={18} />
          Community Safety
        </p>

        <h1>Emergency & Safety Guide</h1>

        <p>
          Explore safety information, emergency topics,
          and guidance on finding appropriate assistance.
        </p>
      </section>

      <div className="emergency-notice" role="note">
        <ShieldAlert size={22} />
        <p>
          These guides contain general draft information.
          Local emergency procedures and contacts
          have not yet been verified.
        </p>
      </div>

      <section className="emergency-directory">
        <div className="emergency-section-title">
          <h2>Browse Emergency Guides</h2>
          <p>Select a category or search for information.</p>
        </div>

        <div className="emergency-search">
          <Search size={20} />

          <input
            type="search"
            aria-label="Search emergency guides"
            placeholder="Search emergency guides..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="emergency-filters">
          {emergencyCategories.map((item) => (
            <button
              type="button"
              key={item.id}
              className={`emergency-filter ${
                category === item.id ? "active" : ""
              }`}
              aria-pressed={category === item.id}
              onClick={() => setCategory(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="emergency-results-header">
          <p aria-live="polite">
            {filteredGuides.length} guides found
          </p>

          <button
            type="button"
            className={`saved-filter ${
              savedOnly ? "active" : ""
            }`}
            onClick={() => setSavedOnly(!savedOnly)}
            aria-pressed={savedOnly}
          >
            <Bookmark size={17} />
            {savedOnly ? "Show all" : "Saved only"}
          </button>
        </div>

        {filteredGuides.length > 0 ? (
          <div className="emergency-grid">
            {filteredGuides.map((guide) => {
              const isSaved = savedIds.includes(guide.id);

              return (
                <article
                  key={guide.id}
                  className="emergency-card"
                >
                  <div className="emergency-card-header">
                    <span className="guide-category">
                      {emergencyCategories.find(
                        (item) => item.id === guide.category
                      )?.label}
                    </span>

                    <button
                      type="button"
                      className="save-guide-btn"
                      aria-label={
                        isSaved
                          ? `Remove ${guide.title} bookmark`
                          : `Bookmark ${guide.title}`
                      }
                      aria-pressed={isSaved}
                      onClick={() =>
                        toggleBookmark(guide.id)
                      }
                    >
                      {isSaved ? (
                        <BookmarkCheck size={22} />
                      ) : (
                        <Bookmark size={22} />
                      )}
                    </button>
                  </div>

                  <h3>{guide.title}</h3>

                  <p className="guide-summary">
                    {guide.summary}
                  </p>

                  <div className="emergency-card-footer">
                    <span className="guide-draft-label">
                      Draft guidance
                    </span>

                    <Link
                      to={`/emergency/${guide.id}`}
                      className="service-details-link"
                    >
                      Read Guide
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="emergency-empty">
            <h3>No matching guides</h3>
            <p>Try another category or search keyword.</p>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setSearch("");
                setCategory("all");
                setSavedOnly(false);
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default EmergencyPage;
