import L from 'leaflet';

export const createChargingStationIcon = (color = '#1976d2', size = 32) => {
    return L.divIcon({
        html: `
      <div style="
        position: relative;
        width: ${size}px;
        height: ${size}px;
        background: white;
        border-radius: 50%;
        border: 2px solid ${color};
        box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="${size * 0.6}" 
          height="${size * 0.6}" 
          viewBox="0 0 24 24" 
          fill="${color}"
        >
          <path d="M14.5 11l-3 6v-4h-2l3-6v4h2z"/>
          <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/>
        </svg>
      </div>
    `,
        className: 'custom-icon',
        iconSize: [size, size],
        iconAnchor: [size / 2, size],
        popupAnchor: [0, -size]
    });
};
