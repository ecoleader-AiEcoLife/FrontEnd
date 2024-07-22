export default function Search() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-10 gap-2 ">
      <h1 className="font-bold text-lg">
        원하시는 제품에 대한 재활용 정보를 빠르게 검색해보세요!
      </h1>
      <div>
        <input
          type="text"
          placeholder="찾으시는 제품을 입력해주세요."
          className="w-[400px] h-10 pl-4 rounded-lg border-2 border-green-500"
        />
        <button className="bg-green-400 rounded-md ml-2 w-[64px] h-10 text-white">
          검색
        </button>
      </div>
    </div>
  );
}
