// Map.js
import React from 'react';
import MapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; // Ensure this CSS is imported

const Map = ({ properties }) => {
  const [viewport, setViewport] = React.useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 10
  });

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="500px"
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      {properties.map(property => (
        <Marker
          key={property.id}
          latitude={property.latitude}
          longitude={property.longitude}
        >
          <div className="marker"></div>
        </Marker>
      ))}
    </MapGL>
  );
};

export default Map;
