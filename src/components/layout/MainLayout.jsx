
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import OfflineBanner from "../OfflineBanner";
import PWAStatus from "../PWAStatus";

function MainLayout() {
  return (
    <div className="app-shell">
      <Header />

      <OfflineBanner />

      <main id="main-content" className="site-main">
        <Outlet />
      </main>

      <Footer />

      <PWAStatus />
    </div>
  );
}

export default MainLayout;
