import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Card from "./Card";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import axios from "axios";

interface recycleProps {
  id: string;
  title: string;
  imgUrl: string;
}
const URL = "http://localhost:3001";

export default function Swipers() {
  const [recycle, setRecycle] = useState<recycleProps[]>([]);
  const [currentCard, setCurrentCard] = useState(0);

  const getRecycle = async () => {
    await axios
      .get(`${URL}/disboard`)
      .then((res) => {
        setRecycle(res.data.main);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getRecycle();
  }, []);

  return (
    <div className="mt-12 flex flex-col justify-center items-center">
      <div className="bg-green-300 bg-opacity-20 p-8 rounded-lg">
        <h1 className="bg-green-200 rounded-md p-1 font-bold text-3xl text-center mb-4 text-green-700">
          재활용 종류
        </h1>
        <Swiper
          className="w-[900px] h-[400px]"
          spaceBetween={10}
          slidesPerView={1.5}
          simulateTouch={true}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={currentCard}
          onSlideChange={(swiper) => {
            setCurrentCard(swiper.snapIndex);
          }}
          observer={true}
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
        >
          {recycle?.map((item) => (
            <SwiperSlide key={item.id}>
              <Card id={item.id} title={item.title} imgUrl={item.imgUrl} />
            </SwiperSlide>
          ))}
        </Swiper>
        <h2 className="pt-3 font-semibold text-center">
          클릭하여 자세한 정보를 알아보아요!
        </h2>
      </div>
    </div>
  );
}
