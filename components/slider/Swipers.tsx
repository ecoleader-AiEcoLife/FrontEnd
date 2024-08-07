import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Card from "./Card";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import axios from "axios";

interface RecycleProps {
  id: string;
  title: string;
  imgUrl: string;
}

export default function Swipers() {
  const [recycles, setRecycles] = useState<RecycleProps[]>([]);
  const [currentCard, setCurrentCard] = useState(0);

  const getRecycles = async () => {
    try {
      const response = await axios.get("/api/recycle");
      setRecycles(response.data.recycles);
    } catch (err) {
      console.error("Error fetching recycles:", err);
    }
  };

  useEffect(() => {
    getRecycles();
  }, []);

  return (
    <div className="mt-12 flex flex-col justify-center items-center">
      <div className="bg-green-300 bg-opacity-20 p-8 rounded-lg">
        <h1 className="bg-green-200 rounded-md p-1 font-bold text-3xl text-center mb-4 text-green-700">
          재활용 종류
        </h1>
        {recycles.length > 0 ? (
          <Swiper
            className="sm:w-[400px] sm:h-[200px] md:w-[600px] md:h-[300px] lg:w-[900px] lg:h-[400px]"
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
            {recycles.map((item) => (
              <SwiperSlide key={item.id}>
                <Card id={item.id} title={item.title} imgUrl={item.imgUrl} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>Loading...</p>
        )}
        <h2 className="pt-3 font-semibold text-center">
          클릭하여 자세한 정보를 알아보아요!
        </h2>
      </div>
    </div>
  );
}
