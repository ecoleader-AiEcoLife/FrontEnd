interface Params {
  params: {
    id: string;
  };
  searchParams: {
    title: string;
    imgUrl: string;
  };
}

//  Next.js의 동적 라우팅에서 URL 쿼리 파라미터는 params(id), searchParams라는 이름으로 전달
export default function RecyclePages({ params, searchParams }: Params) {
  return (
    <div className="bg-green-50 min-h-screen w-full flex justify-center items-center">
      <div className="bg-white w-5/6 p-8 rounded-lg shadow-md flex flex-col items-center">
        <div>
          <h1 className="font-semibold flex">{searchParams.title}</h1>
          <img
            className="w-[400px]"
            src={searchParams.imgUrl}
            alt="이미지 없음"
          />
        </div>
        <div>
          <p>종이류에 해당되는 </p>
        </div>
      </div>
    </div>
  );
}
