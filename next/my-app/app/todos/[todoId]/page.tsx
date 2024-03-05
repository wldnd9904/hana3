import { getTodos } from '@/lib/gets';

type Props = {
  params: { todoId: string };
};

export default async function Todos({ params }: Props) {
  const todos = await getTodos(+params.todoId);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <div
            className={`border border-gray-500 m-1 rounded-md p-0.5 whitespace-nowrap overflow-hidden overflow-ellipsis ${todo.completed ? 'text-gray-500' : 'text-black'}`}
          >
            #{todo.id} {todo.title}
          </div>
        </li>
      ))}
    </ul>
  );
}
