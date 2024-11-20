import RegisterForm from '@/components/auth/RegisterForm';
import Image from 'next/image';

export default function RegisterPage() {
  return (
    <div className='relative bg-slate-100 flex justify-center items-center h-screen '>
      <Image src='/nature.webp' fill priority alt='nature background' className='object-cover' />
      <RegisterForm />
    </div>
  );
}
