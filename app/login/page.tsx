import Image from 'next/image';
import LoginForm from '@/components/auth/LoginForm';
import GoogleSignIn from '@/components/auth/GoogleSignIn';

export default function LoginPage() {
  return (
    <div className='relative bg-slate-100 flex justify-center items-center h-screen'>
      <Image src='/nature.webp' fill priority alt='nature background' className='object-cover' />
      <section className='z-50 flex flex-col bg-white/40 shadow-lg rounded-md p-8'>
        <LoginForm />
        <GoogleSignIn />
      </section>
    </div>
  );
}
