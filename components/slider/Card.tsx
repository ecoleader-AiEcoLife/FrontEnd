import Link from "next/link";

interface RecycleProps {
  id: string;
  title: string;
  imgUrl: string;
}

export default function Card({ id, title, imgUrl }: RecycleProps) {
  return (
    <Link
      href={{
        pathname: `/recycle/${id}`,
        query: {
          title: encodeURIComponent(title),
          imgUrl: encodeURIComponent(imgUrl),
        },
      }}
    >
      <div className="w-full h-full bg-white border-2 border-gray-300 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-400">
        <div className="flex flex-col h-full">
          <div className="flex justify-center font-bold">
            <p className="text-gray-700">{title}</p>
          </div>
          <div className="relative flex-grow">
            {imgUrl && (
              <img
                src={imgUrl}
                alt="사진 없음"
                className="object-cover w-full h-full absolute inset-0"
                // absolute inset-0: 부모 요소를 기준으로 상하좌우 0 위치에 놓이게 되어, 부모 요소를 완전히 채우게 됌
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
