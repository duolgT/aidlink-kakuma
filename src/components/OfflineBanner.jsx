
import { WifiOff } from "lucide-react";
import useOnlineStatus from "../hooks/useOnlineStatus";

function OfflineBanner() {
  const isOnline = useOnlineStatus();

  if (isOnline) {
    return null;
  }

  return (
    <div className="offline-banner" role="status">
      <WifiOff size={21} aria-hidden="true" />

      <p>
        You appear to be offline. Cached AidLink pages
        may still work. Interactive map tiles and
        external services require internet access.
        Reports saved here remain on this device.
      </p>
    </div>
  );
}

export default OfflineBanner;
