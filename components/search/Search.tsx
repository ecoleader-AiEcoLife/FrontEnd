import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface DataProps {
  id: number;
  title: string;
  type: string;
  imgUrl: string;
  context: string;
  subcontext: string;
}

export default function Search() {
  const [allData, setAllData] = useState<DataProps[]>([]);
  const [searchItem, setSearchItem] = useState("");
  const [filteredData, setFilteredData] = useState<DataProps[]>([]);
  const router = useRouter();

  const getAllData = async () => {
    try {
      const res = await axios.get("/api/recycledetail");
      setAllData(res.data);
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

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
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
          className="w-[350px] md:w-[450px] lg:w-[600px] text-sm h-12 pl-4 rounded-3xl border-2 border-green-500"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          onKeyPress={handleKeyPress}
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
              <Image
                src={item.imgUrl}
                alt={item.title}
                width={128}
                height={128}
                className="object-cover mb-2"
              />
              <p className="mb-1">
                <strong>분류:</strong> {item.type}
              </p>
              <p className="mb-1">
                <strong>재활용 방법:</strong> {item.context}
              </p>
              <p>
                <strong>주의사항:</strong> {item.subcontext}
              </p>
            </div>
          ))
        ) : (
          <p>해당되는 재활용품 정보가 없습니다.</p>
        )}
      </div>
    </div>
  );
}
