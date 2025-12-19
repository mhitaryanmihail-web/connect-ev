import {MapContainer, Marker, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { hanoverPoints } from '../../test-data';
import {createChargingStationIcon} from "../marker";
import styles from './styles.module.scss'
import * as React from "react";
import {createCurrentLocationMarker} from "../marker/currentLocationMarker";
import {MapControls} from "../mapControls";

export const Index = ({userPosition, handleMarkerClick, setUserPosition}) => {

    return <MapContainer
        center={[55.7558, 37.6173]}
        zoomControl={false}
        attributionControl={false}
        zoom={13}
        className={styles.map}
    >
        <MapControls setPosition={setUserPosition} />
        {hanoverPoints.map(point => (
            <Marker key={point.id} position={point.position} icon={createChargingStationIcon(point.availabilityInfo.available ? '#1976d2' : 'gray', 35)} eventHandlers={{click: ()=> handleMarkerClick(point)}}/>
        ))}
        {userPosition.length && <Marker key={"user-geo"} position={userPosition} icon={createCurrentLocationMarker('black', 35)}/>}
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
    </MapContainer>
}
