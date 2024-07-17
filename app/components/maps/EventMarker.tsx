import { useState } from "react";
import { CustomOverlayMap, MapMarker } from "react-kakao-maps-sdk";

interface PositionProps {
  title: string;
  imgUrl: string;
  location: string;
  lat: number;
  lng: number;
}

export default function EventMarker({
  title,
  imgUrl,
  location,
  lat,
  lng,
}: PositionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MapMarker position={{ lat, lng }} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <CustomOverlayMap position={{ lat, lng }}>
          <div className="bg-white w-80 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-200 p-2 flex justify-between items-center">
              <span className="font-semibold">{title}</span>
              <button
                className="text-slate-800 font-bold hover:text-red-600 transition-color "
                onClick={() => setIsOpen(false)}
                title="닫기"
              >
                X
              </button>
            </div>
            <div className="p-3">
              <img
                src={imgUrl}
                className="w-full h-48 object-cover mb-3 rounded"
                alt={title}
              />
              <div className="text-m">위치: {location}</div>
            </div>
          </div>
        </CustomOverlayMap>
      )}
    </>
  );
}
