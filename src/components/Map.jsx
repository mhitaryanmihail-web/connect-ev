import {MapContainer, TileLayer, useMap} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import {MapControls} from "./mapControls";

export const Map = () => {
    return <MapContainer
        center={[55.7558, 37.6173]} // Москва
        zoomControl={false}      // ⚡ Убираем + и -
        attributionControl={false}
        zoom={13}
        style={{
            height: '100%', width: '100%',
            position: 'absolute',
            zIndex: 1
        }}
    >
        <MapControls />
        {/* Слой карты OpenStreetMap */}
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
    </MapContainer>
}
