import axios from "axios";
import { useEffect, useState } from "react";

interface DataProps {
  id: number;
  title: string;
  type: { id: number; name: string };
  imgUrl: string;
  context: string;
  subcontext: string;
}

const URL = "http://localhost:3001";

export default function Search() {
  const [allData, setAllData] = useState<DataProps[]>([]);

  const getAllData = async () => {
    try {
      const res = await axios.get(`${URL}/disboard`);
      setAllData(res.data.all);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {};

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center mt-10 gap-2 ">
      {allData.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}

      <h1 className="font-bold text-lg">
        원하시는 제품에 대한 재활용 정보를 빠르게 검색해보세요!
      </h1>
      <div>
        <input
          type="text"
          placeholder="찾으시는 제품을 입력해주세요."
          className="w-[600px] h-12 pl-4 rounded-3xl border-2 border-green-500"
        />
        <button
          className="bg-green-400 rounded-md ml-2 w-[64px] h-10 text-white"
          onClick={handleSearch}
        >
          검색
        </button>
      </div>
    </div>
  );
}
