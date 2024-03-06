import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Photo } from '@/lib/types';

async function fetchPhotos(albumId: number = 1) {
  return fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
    {
      cache: 'no-store',
    }
  ).then((res) => res.json());
}

export default async function Photos2Page({
  searchParams: { albumId = 1 },
}: {
  searchParams: { albumId: number };
}) {
  let photos: Photo[] = await fetchPhotos(albumId);

  return (
    <div className='flex flex-col items-center '>
      <Link href='/'>Home</Link>
      <div className='flex flex-row w-full justify-between'>
        <h1>#{albumId} Photos</h1>
        <form
          action={async (formData: FormData) => {
            'use server';
            const albumId = Number(formData.get('albumID'));
            redirect(`/photos2?albumId=${albumId}`);
          }}
        >
          <input
            type='number'
            name='albumID'
            placeholder='AlbumID...'
            className='border border-gray-500 w-24'
          />
          <button type='submit' className='relative right-4'>
            🔍
          </button>
        </form>
      </div>
      <div className='flex flex-row flex-wrap gap-1 justify-center m-4'>
        {photos.map((photo) => (
          <div className='border border-gray-500 w-28 h-28'>
            <Link key={photo.id} href={`/photos2/${photo.id}`} scroll={false}>
              <Image
                src={photo.thumbnailUrl}
                alt={photo.title}
                width={150}
                height={150}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
