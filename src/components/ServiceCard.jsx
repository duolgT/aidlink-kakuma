
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { getCategoryLabel } from "../data/categories";

function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-card-top">
        <span className="service-category">
          {getCategoryLabel(service.category)}
        </span>

        <span className="demo-status">
          {service.verified ? "Verified" : "Demo • Unverified"}
        </span>
      </div>

      <h3>{service.name}</h3>

      <p className="service-location">
        <MapPin size={16} aria-hidden="true" />
        {service.area}
      </p>

      <p className="service-description">
        {service.description}
      </p>

      <div className="service-card-footer">
        <Link
          to={`/services/${service.id}`}
          className="service-details-link"
        >
          View details
          <ArrowRight size={17} />
        </Link>
      </div>
    </article>
  );
}

export default ServiceCard;
