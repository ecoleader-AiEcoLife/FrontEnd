import Chat from './_components/Chat';

export default async function ChatBotPage() {
  return (
    <main className='w-full min-h-screen bg-gray-900 text-white flex flex-col items-center'>
      <div className='text-[28px] font-bold p-[80px]'>Talk to AI Bot</div>
      <Chat />
    </main>
  );
}
