import Image from "next/image";
import Link from "next/link";

interface RecycleProps {
  id: string;
  title: string;
  imgUrl: string;
}

export default function Card({ title, imgUrl }: RecycleProps) {
  return (
    <Link href={`/recycle/${title}`}>
      <div className="w-full h-full bg-white border-2 border-gray-300 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-400">
        <div className="flex flex-col h-full">
          <div className="flex justify-center font-bold">
            <p className="text-gray-700">{title}</p>
          </div>
          <div className="relative flex-grow">
            {imgUrl && (
              <Image
                src={imgUrl}
                alt="사진 없음"
                fill
                sizes="100vw"
                className="object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
