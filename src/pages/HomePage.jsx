
import { Link } from "react-router-dom";
import {
  MapPin,
  ShieldCheck,
  ClipboardList,
  ArrowRight,
  WifiOff,
  HeartHandshake,
  Search,
} from "lucide-react";

const features = [
  {
    title: "Find Essential Services",
    description:
      "Discover healthcare, education, and other community services in Kakuma.",
    icon: MapPin,
    path: "/services",
    color: "blue",
    action: "Explore services",
  },
  {
    title: "Emergency Guidance",
    description:
      "Access practical safety information and emergency guidance.",
    icon: ShieldCheck,
    path: "/emergency",
    color: "orange",
    action: "View guidance",
  },
  {
    title: "Community Reporting",
    description:
      "Record challenges and service gaps affecting your community.",
    icon: ClipboardList,
    path: "/report",
    color: "green",
    action: "Create a report",
  },
];

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow">
              <HeartHandshake size={17} />
              Technology for community impact
            </div>

            <h1>
              Connecting Kakuma to
              <span> Essential Services</span>
            </h1>

            <p className="hero-description">
              One place to discover services, access
              emergency guidance, and report community
              challenges. Designed with refugee communities
              in mind.
            </p>

            <div className="hero-actions">
              <Link to="/services" className="btn btn-primary">
                <Search size={18} />
                Find Services
              </Link>

              <Link to="/emergency" className="btn btn-outline">
                Emergency Guide
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="hero-note">
              <WifiOff size={19} />
              Offline-first features planned
            </div>
          </div>

          <div className="hero-preview">
            <div className="preview-top">
              <div className="preview-logo">
                <HeartHandshake size={28} />
              </div>
              <div>
                <strong>How AidLink helps</strong>
                <p>Community support, simplified</p>
              </div>
            </div>

            <div className="preview-item">
              <span className="preview-item-icon blue">
                <MapPin size={22} />
              </span>
              <div>
                <strong>Discover</strong>
                <p>Find nearby essential services</p>
              </div>
            </div>

            <div className="preview-item">
              <span className="preview-item-icon orange">
                <ShieldCheck size={22} />
              </span>
              <div>
                <strong>Prepare</strong>
                <p>Read practical emergency guidance</p>
              </div>
            </div>

            <div className="preview-item">
              <span className="preview-item-icon green">
                <ClipboardList size={22} />
              </span>
              <div>
                <strong>Report</strong>
                <p>Document community challenges</p>
              </div>
            </div>

            <p className="preview-caption">
              Hackathon prototype — features under development
            </p>
          </div>
        </div>
      </section>

      <section className="features-section container">
        <div className="section-heading">
          <p className="eyebrow">What you can do</p>
          <h2>One platform. Three essential tools.</h2>
          <p>
            Simple digital tools designed to make
            community information more accessible.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                className="feature-card"
                key={feature.title}
              >
                <div
                  className={`feature-icon ${feature.color}`}
                >
                  <Icon size={27} />
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>

                <Link
                  to={feature.path}
                  className="feature-link"
                >
                  {feature.action}
                  <ArrowRight size={17} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mission-section">
        <div className="container mission-inner">
          <h2>Built for the Kakuma community</h2>
          <p>
            AidLink aims to make essential information
            easier to find, including for people who
            experience limited internet connectivity.
          </p>
          <Link to="/report" className="btn btn-primary">
            Explore Community Reporting
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

export default HomePage;
