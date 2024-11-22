import { redirect } from 'next/navigation';
import { auth } from '../auth';
import KakaoMap from './_components/KakaoMap';

export default async function MapPage() {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  return <KakaoMap />;
}
