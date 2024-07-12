"use client";

import { useState, useEffect } from "react";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import Addmarkers from "../components/maps/Addmarkets";

export default function map() {
  const [state, setState] = useState({
    center: {
      lat: 35.8888,
      lng: 128.6103,
    },
    errMsg: null,
    isLoading: true,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옴
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev: any) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정함
      setState((prev: any) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없습니다.",
        isLoading: false,
      }));
    }
  }, []);

  const [loading, error] = useKakaoLoader({
    appkey: "3f96fc58804b22536710a1b20d4bec0d",
  });

  // 지도의 중심좌표

  return (
    // Map 내부에서 loading 상태를 관찰하고 있기 때문에 conditional rendering를 하지 않아도 됌
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="bg-green-100 p-2 rounded-md font-bold mb-3">
        재활용 쓰레기통 위치 지도
      </div>
      <Map // 지도를 표시할 Container
        center={state.center}
        style={{
          // 지도의 크기
          width: "900px",
          height: "550px",
        }}
        level={3} // 지도의 확대 레벨
      >
        <Addmarkers />

        {!state.isLoading && (
          <MapMarker
            position={state.center}
            infoWindowOptions={{
              disableAutoPan: true,
              removable: true,
              zIndex: 1,
            }}
          >
            <div className="whitespace-nowrap px-2.5 py-1.5 pr-1">
              {state.errMsg ? state.errMsg : "현재 위치"}
            </div>
          </MapMarker>
        )}
      </Map>
    </div>
  );
}
