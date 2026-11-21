
import { useState } from "react";
import { Search } from "lucide-react";

import { services } from "../data/services";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ServiceCard from "../components/ServiceCard";
import ServiceMap from "../components/ServiceMap";

function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const query = searchQuery.trim().toLowerCase();

  const filteredServices = services.filter((service) => {
    const matchesCategory =
      selectedCategory === "all" ||
      service.category === selectedCategory;

    const searchableText = [
      service.name,
      service.category,
      service.area,
      service.description,
      ...service.servicesOffered,
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch =
      query === "" || searchableText.includes(query);

    return matchesCategory && matchesSearch;
  });

  function clearFilters() {
    setSearchQuery("");
    setSelectedCategory("all");
  }

  return (
    <section className="services-page container">
      <div className="services-heading">
        <p className="eyebrow">Community directory</p>
        <h1>Find Essential Services</h1>
        <p>
          Search by name or service type, explore categories,
          and find useful community information.
        </p>
      </div>

      <div className="directory-notice" role="note">
        This directory currently contains sample entries
        for demonstration. Service availability, contacts,
        and locations have not been verified.
      </div>

      <div className="services-tools">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
        />

        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      <div className="services-layout">
        <div className="services-results">
          <div className="results-header">
            <h2>Available listings</h2>
            <span aria-live="polite">
              {filteredServices.length} result
              {filteredServices.length !== 1 ? "s" : ""}
            </span>
          </div>

          {filteredServices.length > 0 ? (
            <div className="service-list">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                />
              ))}
            </div>
          ) : (
            <div className="empty-results">
              <Search size={34} aria-hidden="true" />
              <h3>No services found</h3>
              <p>
                Try another keyword or select a different
                service category.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={clearFilters}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        <aside className="services-map-column">
          <ServiceMap services={filteredServices} />
        </aside>
      </div>
    </section>
  );
}

export default ServicesPage;
