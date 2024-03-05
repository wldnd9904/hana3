import Link from 'next/link';

export default function Hello() {
  //redirect('/hello/morning');

  return (
    <>
      <h1 className='text-lg'>Hello Page</h1>
      <Link href='/' scroll={false} type='button'>
        Go Home
      </Link>
    </>
  );
}
