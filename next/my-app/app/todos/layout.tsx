import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { getUsers } from '@/lib/gets';
import { User } from '@/lib/types';

export default async function TodosLayout({ children }: PropsWithChildren) {
  const users: User[] = await getUsers();
  return (
    <div className='flex flex-row gap-1'>
      <div className='w-1/2'>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <div className='border border-gray-500 m-1 rounded-md p-0.5'>
                <Link href={`/todos/${user.id}`} scroll={false}>
                  #{user.id} {user.name}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='w-1/2'>{children}</div>
    </div>
  );
}
