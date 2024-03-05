import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { getTodos } from '@/lib/gets';
import { Todo } from '@/lib/types';

export default async function TodosLayout({ children }: PropsWithChildren) {
  const todos: Todo[] = await getTodos(10);
  return (
    <div className='flex flex-row gap-1'>
      <div className='w-1/2'>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <div
                className={`border border-gray-500 m-1 rounded-md p-0.5 ${todo.completed ? 'line-through' : ''}`}
              >
                <Link href={`/todos/${todo.id}`} scroll={false}>
                  <input
                    id={`todo-${todo.id}`}
                    type='checkbox'
                    checked={todo.completed}
                    readOnly
                  />
                  #{todo.id} {todo.title}
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
