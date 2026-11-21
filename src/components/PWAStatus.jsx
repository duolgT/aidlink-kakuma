
import { Download, RefreshCw, X } from "lucide-react";
import { useRegisterSW } from "virtual:pwa-register/react";

function PWAStatus() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisterError(error) {
      console.error("Service worker registration failed:", error);
    },
  });

  if (!offlineReady && !needRefresh) {
    return null;
  }

  function dismiss() {
    setOfflineReady(false);
    setNeedRefresh(false);
  }

  return (
    <div className="pwa-status" role="status">
      <div className="pwa-status-content">
        {needRefresh ? (
          <RefreshCw size={23} />
        ) : (
          <Download size={23} />
        )}

        <div>
          <strong>
            {needRefresh
              ? "Update available"
              : "Offline mode ready"}
          </strong>

          <p>
            {needRefresh
              ? "Save unfinished work before updating."
              : "App pages are cached. Maps still require internet."}
          </p>
        </div>
      </div>

      <div className="pwa-status-actions">
        {needRefresh && (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => updateServiceWorker(true)}
          >
            Update App
          </button>
        )}

        <button
          type="button"
          className="pwa-dismiss"
          onClick={dismiss}
          aria-label="Dismiss notification"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}

export default PWAStatus;
