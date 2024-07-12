import { MapMarker } from "react-kakao-maps-sdk";

interface positionsProps {
  title: string;
  latlng: {
    lat: number;
    lng: number;
  };
}

const positions = [
  {
    title: "카카오",
    latlng: { lat: 35.8888, lng: 128.6103 },
  },
  {
    title: "생태연못",
    latlng: { lat: 35.887, lng: 128.61 },
  },
  {
    title: "텃밭",
    latlng: { lat: 35.889, lng: 128.6109 },
  },
  {
    title: "근린공원",
    latlng: { lat: 35.8889, lng: 128.61 },
  },
];

export default function Addmarkers() {
  return (
    <div>
      {positions.map((position: positionsProps) => (
        <MapMarker
          key={`${position.title}-${position.latlng}`}
          position={position.latlng} // 마커를 표시할 위치
          image={{
            src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소
            size: {
              width: 24,
              height: 35,
            }, // 마커이미지의 크기
          }}
          title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시
        />
      ))}
    </div>
  );
}
