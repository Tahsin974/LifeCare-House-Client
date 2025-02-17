import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const MapComponent = ({ doctor }) => {
  const { lat, lon, clinicName } = doctor;
  return (
    <MapContainer
      center={[lat, lon]}
      zoom={13}
      className="sticky  lg:h-[500px] md:h-[500px] sm:h-[500px] h-[350px] w-[100%] "
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />

      <Marker position={[lat, lon]}>
        <Popup>{clinicName}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
