import Link from 'next/link';
import { Photo } from '@/lib/types';

async function fetchPhotos(albumId: number = 1) {
  return fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
    {
      cache: 'no-store',
    }
  ).then((res) => res.json());
}

export default async function PhotosPage() {
  const photos: Photo[] = await fetchPhotos();
  return (
    <div className='flex flex-col items-center'>
      <h1>Photos</h1>
      <div className='flex flex-row flex-wrap gap-1'>
        {photos.map((photo) => (
          <Link key={photo.id} href={`/photos/${photo.id}`} scroll={false}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}
