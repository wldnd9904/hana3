import { ReactNode } from 'react';

export default async function TodosLayout({
  todos,
  todo,
  children,
}: {
  todos: ReactNode;
  todo: ReactNode;
  children: ReactNode;
}) {
  return (
    <div>
      {children}
      <div className='flex flex-row gap-1'>
        <div className='flex-grow border border-gray-500'>{todos}</div>
        <div className='flex-grow border border-gray-500'>{todo}</div>
      </div>
    </div>
  );
}
