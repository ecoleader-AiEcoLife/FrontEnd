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
    <div>
      {params.id}. <h1>{searchParams.title}</h1>
      <img src={searchParams.imgUrl} alt="이미지 없음" />
    </div>
  );
}
