import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Card from "./Card";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

interface recycleProps {
  id: string;
  title: string;
  imgUrl: string;
}

const recycle: recycleProps[] = [
  {
    id: "1",
    title: "종이류",
    imgUrl:
      "https://cdn-cms.packative.com/wp-content/uploads/2023/05/31102336/%EC%A2%85%EC%9D%B4-3.jpg",
  },
  {
    id: "2",
    title: "캔류",
    imgUrl:
      "https://www.thekmagazine.co.kr/data/theK_2206/images/sub/sub3/5/1.jpg",
  },
  {
    id: "3",
    title: "유리류",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-zLO3zYo3BCshIKcRQ4KEkNWamv2Jhab0w&s",
  },
  {
    id: "4",
    title: "플라스틱류",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXGzB57tvM28s77Dga4hooEEmdKqajSsAKg&s",
  },
  {
    id: "5",
    title: "비닐류",
    imgUrl:
      "https://www.consumerpost.co.kr/news/photo/201808/201448_101950_3659.png",
  },
  {
    id: "6",
    title: "의류",
    imgUrl:
      "https://www.fashionnet.or.kr/wp-content/uploads/2022/11/kfashionnews-368.jpg",
  },
];

export default function Swipers() {
  const [currentCard, setCurrentCard] = useState(0);

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
