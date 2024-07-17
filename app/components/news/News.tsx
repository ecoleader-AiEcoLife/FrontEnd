import axios from "axios";
import { useEffect, useState } from "react";

const URL = "https://openapi.naver.com/v1/search/news.json";

export default function News() {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    try {
      const res = await axios.get("URL");
      setNews(res.data);
    } catch (error) {
      console.error("news 데이터 실패 : ", error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="border border-red-500 min-h-screen flex justify-center items-center">
      <div>헤잉</div>
    </div>
  );
}
