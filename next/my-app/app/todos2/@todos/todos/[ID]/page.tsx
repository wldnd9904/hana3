import Link from 'next/link';
import { getTodos } from '@/lib/gets';

type Props = {
  params: { ID: string };
};
export default async function TodoListFor({ params }: Props) {
  const todos = await getTodos(+params.ID);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <div
            className={`border border-gray-500 m-1 rounded-md p-0.5 ${todo.completed ? 'line-through' : ''}`}
          >
            <Link href={`/todos2/todo/${todo.id}`} scroll={false}>
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
  );
}
