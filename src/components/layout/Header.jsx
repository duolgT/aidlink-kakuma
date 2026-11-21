
import { Link } from "react-router-dom";
import { HeartHandshake } from "lucide-react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <span className="brand-icon">
            <HeartHandshake size={25} />
          </span>

          <span className="brand-text">
            <strong>AidLink</strong>
            <small>KAKUMA</small>
          </span>
        </Link>

        <Navbar />
      </div>
    </header>
  );
}

export default Header;
