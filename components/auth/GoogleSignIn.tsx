import { signIn } from '@/app/auth';

export default function GoogleSignIn() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('google');
      }}
    >
      <button
        type='submit'
        className='w-[380px] bg-blue-500 text-white font-bold px-[20px] py-[8px] rounded-3xl hover:scale-105 duration-200'
      >
        Signin with Google
      </button>
    </form>
  );
}
