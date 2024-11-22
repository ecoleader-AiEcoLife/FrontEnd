import News from '@/components/news/News';
import Search from '@/components/search/Search';
import Swipers from '@/components/slider/Swipers';
import Image from 'next/image';

export default function Page() {
  return (
    <main className='w-full min-h-screen flex flex-col items-center'>
      <section className='relative w-full h-[500px] md:h-[600] lg:h-[750px]'>
        <Image alt='saveforest-bg' src='/saveforest.webp' fill priority className='object-cover w-full brightness-75' />
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
          <h1 className='font-bold text-white text-[50px]'>MAKE THIS WORLD</h1>
          <div className='bg-black/50 mt-4 p-1 rounded-xl'>
            <h2 className='font-semibold text-white text-[30px] text-center'>The Better Place</h2>
          </div>
        </div>
      </section>
      <section className='w-full'>
        <div className='mb-[50px]'>
          <Search />
        </div>
        <div className='shadow-lg'>
          <Swipers />
        </div>
      </section>

      <section className='relative w-full'>
        <Image src='/nature.webp' fill priority alt='nature background' className='object-cover' />
        <div className='relative z-10'>
          <News />
        </div>
      </section>
    </main>
  );
}
