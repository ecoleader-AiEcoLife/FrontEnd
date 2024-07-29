import axios from "axios";

interface ItemProps {
  id: number;
  title: string;
  body: string;
}

interface NewboardProps {
  board: ItemProps[];
}

const URL = "http://localhost:3001";

export default function Newboard({ board }: NewboardProps) {
  const handlePost = async () => {
    try {
      const newId = board.length + 1;
      const newTitle = "새로운 Title";
      const newBody = "새로운 Body";

      await axios.post(`${URL}/board`, {
        id: newId,
        title: newTitle,
        body: newBody,
      });
    } catch (error) {
      console.log("데이터 Post 실패:", error);
      alert("게시판 추가 실패 (Post)");
    }
  };

  return (
    <div className="flex justify-end">
      <button
        onClick={handlePost}
        className="bg-green-500 text-white rounded-md mt-4 p-1"
      >
        글쓰기
      </button>
    </div>
  );
}
