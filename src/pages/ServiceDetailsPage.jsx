
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  Phone,
} from "lucide-react";

import { getServiceById } from "../data/services";
import { getCategoryLabel } from "../data/categories";

function ServiceDetailsPage() {
  const { id } = useParams();
  const service = getServiceById(id);

  if (!service) {
    return (
      <section className="page-shell">
        <h1>Service not found</h1>
        <p>
          The requested service does not exist
          in our directory.
        </p>

        <Link to="/services" className="btn btn-primary">
          Browse Services
        </Link>
      </section>
    );
  }

  return (
    <section className="service-details-page container">
      <Link to="/services" className="back-link">
        <ArrowLeft size={18} />
        Back to Services
      </Link>

      <div className="details-header">
        <span className="service-category">
          {getCategoryLabel(service.category)}
        </span>

        <h1>{service.name}</h1>

        <p className="service-location">
          <MapPin size={18} />
          {service.area}
        </p>
      </div>

      {!service.verified && (
        <div className="directory-notice" role="note">
          <AlertTriangle size={20} />
          This is an unverified demonstration listing.
          Do not use it to seek real-world assistance.
        </div>
      )}

      <div className="details-grid">
        <article className="details-panel">
          <h2>About this service</h2>
          <p>{service.description}</p>

          <h2>Services and support</h2>

          <ul className="support-list">
            {service.servicesOffered.map((item) => (
              <li key={item}>
                <CheckCircle2 size={19} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <aside className="details-panel">
          <h2>Service Information</h2>

          <div className="detail-row">
            <MapPin size={20} />
            <div>
              <strong>Area</strong>
              <p>{service.area}</p>
            </div>
          </div>

          <div className="detail-row">
            <Phone size={20} />
            <div>
              <strong>Contact</strong>
              {service.verified && service.phone ? (
                <p>
                  <a href={`tel:${service.phone}`}>
                    {service.phone}
                  </a>
                </p>
              ) : (
                <p>Not available or verified</p>
              )}
            </div>
          </div>

          <div className="detail-row">
            <CheckCircle2 size={20} />
            <div>
              <strong>Verification</strong>
              <p>
                {service.verified
                  ? "Verified listing"
                  : "Not verified"}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default ServiceDetailsPage;
