
import { Link } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const KAKUMA_CENTER = [3.7307854, 34.841857];

function ServiceMap({ services }) {
  const mappedServices = services.filter(
    (service) =>
      service.verified === true &&
      Array.isArray(service.coordinates) &&
      service.coordinates.length === 2 &&
      service.coordinates.every(Number.isFinite)
  );

  return (
    <div className="service-map-wrapper">
      <div className="service-map-heading">
        <h3>Explore Kakuma</h3>
        <p>Interactive area map</p>
      </div>

      <MapContainer
        center={KAKUMA_CENTER}
        zoom={12}
        scrollWheelZoom={false}
        className="service-map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {mappedServices.map((service) => (
          <Marker
            key={service.id}
            position={service.coordinates}
          >
            <Popup>
              <strong>{service.name}</strong>
              <p>{service.area}</p>
              <Link to={`/services/${service.id}`}>
                View details
              </Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <p className="map-disclaimer">
        {mappedServices.length === 0
          ? "No verified location pins available yet."
          : "Only verified service locations are shown."}
        {" "}The map requires an internet connection.
      </p>
    </div>
  );
}

export default ServiceMap;
