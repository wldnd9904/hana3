import Modal from '@/app/components/Modal';
import { Photo } from '@/lib/types';

async function fetchPhoto(photoId: number = 1) {
  return fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`, {
    cache: 'no-store',
  }).then((res) => res.json());
}

export default async function defaultTodoPage({
  params: { photoId },
}: {
  params: { photoId: string };
}) {
  const photo: Photo = await fetchPhoto(+photoId);
  return (
    <Modal>
      <div className='bg-white'>
        <img src={photo.url} alt={photo.title} />
        <h3 className='p-1'>{photo.title}</h3>
      </div>
    </Modal>
  );
}
