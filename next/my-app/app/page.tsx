import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Link href='/hello'>Hello</Link>
      <Link href='/hi'>Hi</Link>
      <Link href='/parallel'>Parallel</Link>
      <Link href='/intercept'>Intercept</Link>
      <Link href='/todos'>Todos</Link>
      <Link href='/todos2'>Todos2</Link>
      <Link href='/photos'>Photos</Link>
      <Image
        src='/vercel.svg'
        alt='Vercel Logo'
        className='dark:invert'
        width={100}
        height={24}
        priority
      />
    </main>
  );
}
