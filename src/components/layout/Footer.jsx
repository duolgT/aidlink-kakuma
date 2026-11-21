
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>AidLink Kakuma</strong>
          <p>Connecting communities to essential services.</p>
        </div>

        <p>
          © {new Date().getFullYear()} AidLink Kakuma.
          Community-focused innovation.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
