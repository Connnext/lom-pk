import React, { useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import eye from "img/eye.svg";
import "./yaMap.css";

export default function YaMap() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const handleOverlayClick = () => {
    setIsOverlayVisible(false);
  };

  return (
    <div className="map-container">
      <YMaps>
        <Map
          defaultState={{
            center: [59.91735973744972, 29.767717255294766],
            zoom: 17,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
          style={{ width: "100%", height: "100%", zIndex: 0 }}
        >
          <Placemark
            modules={["geoObject.addon.balloon"]}
            defaultGeometry={[59.917343576685305, 29.76772798413082]}
            properties={{
              balloonContentBody:
                "Магазин печей и каминов «Ломоносовский печной клуб»",
            }}
          />
        </Map>
      </YMaps>

      {isOverlayVisible && (
        <div className="overlay" onClick={handleOverlayClick}>
          <img className="svg-icon" src={eye} alt="" />
        </div>
      )}
    </div>
  );
}
