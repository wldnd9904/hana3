import Image from 'next/image';
import { Photo } from '@/lib/types';

async function fetchPhoto(photoId: number = 1) {
  return fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`, {
    cache: 'no-store',
  }).then((res) => res.json());
}

export default async function Photos2PhotoIdPage({
  params: { photoId },
}: {
  params: { photoId: string };
}) {
  const photo: Photo = await fetchPhoto(+photoId);
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <a href='/photos2'>Photos2</a>
      <figure className='w-96'>
        <figcaption className='text-center'>{photo.title}</figcaption>
        <Image src={photo.url} alt={photo.title} width={400} height={400} />
      </figure>
    </div>
  );
}
