import { useState } from "react";
import { MapMarker, useMap } from "react-kakao-maps-sdk";

interface PositionProps {
  title: string;
  latlng: {
    lat: number;
    lng: number;
  };
}

export default function EventMarker({
  position,
  title,
}: {
  position: PositionProps["latlng"];
  title: string;
}) {
  const map = useMap();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <MapMarker
        onClick={(marker) => map.panTo(marker.getPosition())}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
        position={position}
        image={{
          src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
          size: {
            width: 24,
            height: 35,
          },
        }}
        title={title}
      >
        {isVisible && title}
      </MapMarker>
    </>
  );
}
