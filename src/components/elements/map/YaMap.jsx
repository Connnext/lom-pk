import React, { useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "./yaMap.css"; // импортируем CSS файл

export default function YaMap({ width, height }) {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [isSvgVisible, setIsSvgVisible] = useState(false);

  const handleOverlayClick = () => {
    setIsOverlayVisible(false); // скрываем overlay при клике
  };

  const handleOverlayHover = (e) => {
    e.target.style.backgroundColor = "rgba(0, 0, 0, 0.2)"; // изменяем цвет фона при наведении
    setIsSvgVisible(true); // показываем SVG при наведении
  };

  const handleOverlayLeave = (e) => {
    e.target.style.backgroundColor = "transparent"; // возвращаем цвет фона при уходе курсора
    setIsSvgVisible(false); // скрываем SVG при уходе курсора
  };

  return (
    <div className="map-container" style={{ width: width, height: height }}>
      <YMaps>
        <Map
          defaultState={{
            center: [59.91735973744972, 29.767717255294766],
            zoom: 17,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
          style={{ width: width, height: height, zIndex: 0 }} // убедимся, что карта находится под div
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
      <div
        className="overlay"
        onClick={handleOverlayClick}
        onMouseEnter={handleOverlayHover}
        onMouseLeave={handleOverlayLeave}
        style={{ display: isOverlayVisible ? "flex" : "none" }} // определяем видимость overlay'а
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`svg-icon ${isSvgVisible ? "visible" : ""}`} // показываем svg только при isSvgVisible = true
        >
          <g id="_01_align_center" data-name="01 align center">
            <path
              fill="#ffffff"
              d="M23.821,11.181v0C22.943,9.261,19.5,3,12,3S1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64C1.057,14.739,4.5,21,12,21s10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM12,19c-6.307,0-9.25-5.366-10-6.989C2.75,10.366,5.693,5,12,5c6.292,0,9.236,5.343,10,7C21.236,13.657,18.292,19,12,19Z"
            />
            <path
              fill="#ffffff"
              d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
