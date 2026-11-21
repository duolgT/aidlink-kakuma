
import { useEffect, useState } from "react";
import {
  ClipboardList,
  Trash2,
  MapPin,
  Clock3,
  Database,
  Info,
} from "lucide-react";

import ReportForm from "../components/ReportForm";
import { getReports, deleteReport } from "../lib/db";
import { getReportCategoryLabel } from "../utils/constants";

function ReportPage() {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadReports() {
      try {
        const savedReports = await getReports();

        if (!cancelled) {
          setReports(savedReports);
        }
      } catch (err) {
        console.error("Failed to load reports:", err);

        if (!cancelled) {
          setError("Unable to read saved reports.");
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    loadReports();

    return () => {
      cancelled = true;
    };
  }, []);

  function handleReportSaved(report) {
    setReports((previous) => [report, ...previous]);
    setMessage("Your draft was saved on this device.");
    setError("");
  }

  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Permanently delete this locally saved report?"
    );

    if (!confirmed) return;

    setDeletingId(id);
    setError("");
    setMessage("");

    try {
      await deleteReport(id);

      setReports((previous) =>
        previous.filter((report) => report.id !== id)
      );

      setMessage("Local report deleted.");
    } catch (err) {
      console.error("Unable to delete report:", err);
      setError("Could not delete the report.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <section className="report-page container">
      <header className="report-page-header">
        <p className="eyebrow">
          <ClipboardList size={18} />
          Community reporting
        </p>

        <h1>Report a Community Challenge</h1>

        <p>
          Document general challenges affecting access
          to essential community services.
        </p>
      </header>

      <div className="report-warning" role="note">
        <Info size={23} aria-hidden="true" />
        <p>
          This is a local prototype, not an official
          complaint or emergency reporting channel.
          Reports are not sent to anyone. For urgent
          or sensitive concerns, seek help directly
          from an appropriate trusted service.
        </p>
      </div>

      {message && (
        <div className="report-success" role="status">
          {message}
        </div>
      )}

      {error && (
        <div className="form-error" role="alert">
          {error}
        </div>
      )}

      <div className="report-layout">
        <div>
          <ReportForm onSaved={handleReportSaved} />
        </div>

        <aside className="report-sidebar">
          <div className="report-stat-card">
            <Database size={25} />
            <span>Saved Local Drafts</span>
            <strong>{reports.length}</strong>
            <p>Stored on this device only</p>
          </div>

          <div className="report-info-card">
            <h3>How it works</h3>
            <p>
              Create a report, save it in your browser,
              and review it below.
            </p>
            <p>
              No account or internet connection is
              required for the database operations
              after this page has loaded.
            </p>
          </div>
        </aside>
      </div>

      <section className="saved-reports">
        <div className="saved-reports-heading">
          <h2>My Saved Reports</h2>
          <span>{reports.length} local drafts</span>
        </div>

        {isLoading ? (
          <p>Loading locally saved reports...</p>
        ) : reports.length === 0 ? (
          <div className="reports-empty">
            <ClipboardList size={38} />
            <h3>No saved reports yet</h3>
            <p>
              Use the form above to create your first
              community report.
            </p>
          </div>
        ) : (
          <div className="report-list">
            {reports.map((report) => (
              <article
                className="saved-report-card"
                key={report.id}
              >
                <div className="saved-report-top">
                  <span className="report-category-tag">
                    {getReportCategoryLabel(
                      report.category
                    )}
                  </span>

                  <span className="report-local-status">
                    Local draft
                  </span>
                </div>

                <h3>{report.title}</h3>
                <p className="saved-report-description">
                  {report.description}
                </p>

                <div className="saved-report-meta">
                  <span>
                    <MapPin size={16} />
                    {report.area}
                  </span>

                  <span>
                    <Clock3 size={16} />
                    {new Date(
                      report.createdAt
                    ).toLocaleString()}
                  </span>
                </div>

                <div className="saved-report-actions">
                  <button
                    type="button"
                    className="delete-report-btn"
                    disabled={deletingId === report.id}
                    onClick={() =>
                      handleDelete(report.id)
                    }
                  >
                    <Trash2 size={17} />
                    {deletingId === report.id
                      ? "Deleting..."
                      : "Delete Draft"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </section>
  );
}

export default ReportPage;
