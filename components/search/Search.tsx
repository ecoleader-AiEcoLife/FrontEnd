import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
  const [searchItem, setSearchItem] = useState("");
  const [filteredData, setFilteredData] = useState<DataProps[]>([]);
  const router = useRouter();

  const getAllData = async () => {
    try {
      const res = await axios.get(`${URL}/disboard`);
      setAllData(res.data.all);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {
    const filtered = allData.filter((item) =>
      item.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleItemClick = (id: number) => {
    router.push(`/recycle/detail/${id}`);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center mt-10 gap-2 ">
      <h1 className="font-bold text-lg">
        원하시는 제품에 대한 재활용 정보를 빠르게 검색해보세요!
      </h1>
      <div>
        <input
          type="text"
          placeholder="찾으시는 제품을 입력해주세요."
          className="w-[600px] h-12 pl-4 rounded-3xl border-2 border-green-500"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <button
          className="bg-green-400 rounded-md ml-2 w-[64px] h-10 text-white"
          onClick={handleSearch}
        >
          검색
        </button>
      </div>
      <div className="mt-4">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item.id}
              className="mb-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-100"
              onClick={() => handleItemClick(item.id)}
            >
              <h2 className="font-bold text-xl mb-2">{item.title}</h2>
              <img
                src={item.imgUrl}
                alt={item.title}
                className="w-32 h-32 object-cover mb-2"
              />
              <p className="mb-1">
                <strong>분류:</strong> {item.type.name}
              </p>
              <p className="mb-1">
                <strong>재활용 방법:</strong> {item.context}
              </p>
              <p>
                <strong>주의사항:</strong> {item.subcontext}
              </p>
            </div>
          ))
        ) : searchItem ? (
          <p>검색 결과가 없습니다.</p>
        ) : (
          <p>검색어를 입력하고 검색 버튼을 눌러주세요.</p>
        )}
      </div>
    </div>
  );
}
