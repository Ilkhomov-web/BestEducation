import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ourLocation from "../../data/ourLocation";
import L from "leaflet";

// Marker icon fix (Leaflet default icon)
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const FlyToBranch = ({ branch, markerRefs }) => {
  const map = useMap();

  useEffect(() => {
    if (branch) {
      // Fly to location
      map.flyTo(branch.location, 16, { duration: 1.5 });

      // Marker popup ochish
      setTimeout(() => {
        const marker = markerRefs.current[branch.id];
        if (marker) {
          marker.openPopup();
        }
      }, 1600); // flyTo tugagandan keyin ochish
    }
  }, [branch, map, markerRefs]);

  return null;
};

const OurBranchesMap = ({ selectedBranch }) => {
  const markerRefs = useRef({});

  return (
    <Box width="100%">
      <MapContainer
        center={[40.13623979930595, 67.82243065933008]}
        zoom={13}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {selectedBranch && (
          <FlyToBranch branch={selectedBranch} markerRefs={markerRefs} />
        )}

        {ourLocation.map((branch) => (
          <Marker
            key={branch.id}
            position={branch.location}
            icon={markerIcon}
            ref={(ref) => {
              if (ref) {
                markerRefs.current[branch.id] = ref;
              }
            }}
          >
            <Popup>{branch.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default OurBranchesMap;
