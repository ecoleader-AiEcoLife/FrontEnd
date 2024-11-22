import Link from 'next/link';
import Boards from './_components/Boards';

export default function BoardPage() {
  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-6 text-center text-gray-800'>정보 게시판</h1>
      <div className='bg-white shadow-md rounded-lg overflow-hidden'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-green-300'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>번호</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>제목</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>작성자</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>작성일</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            <Boards />
          </tbody>
        </table>
      </div>
      <div className='mt-6 flex justify-end'>
        <Link href={'/board/newboard'} className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
          글쓰기
        </Link>
      </div>
    </div>
  );
}
