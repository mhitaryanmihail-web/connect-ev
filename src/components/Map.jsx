import {MapContainer, Marker, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import {MapControls} from "./mapControls";
import { hanoverPoints } from '../test-data';
import {createChargingStationIcon} from "./marker";
import * as React from "react";

import {Drawer} from "./SwipableDrawer/index";

const stationIcon = createChargingStationIcon('#1976d2', 35);

export const Map = () => {
    const [open, setOpen] = React.useState(false);
    const [selectedPlace, setSelectedPlace] = React.useState({name: "", description: ""});

    const handleMarkerClick = (placeInfo) => {
        setOpen(true)
        setSelectedPlace({name: placeInfo.name, description:placeInfo.description});
    }

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
        {hanoverPoints.map(point => (
            <Marker key={point.id} position={point.position} icon={stationIcon} eventHandlers={{click: ()=> handleMarkerClick(point)}}/>
        ))}
        {/* Слой карты OpenStreetMap */}
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Drawer open={open} setOpen={setOpen} placeInfo={selectedPlace} />
    </MapContainer>
}
