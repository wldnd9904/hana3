import { getTodo } from '@/lib/gets';

type Props = {
  params: { ID: string };
};

export default async function TodosPage({ params }: Props) {
  const todo = await getTodo(+params.ID);
  return (
    <>
      {todo && (
        <div
          className={`flex flex-col border border-gray-500 m-1 rounded-md p-0.5 ${todo.completed ? 'text-gray-500' : 'text-black'}`}
        >
          <span>
            #{todo.id}
            <input
              id={`todo-${todo.id}`}
              type='checkbox'
              checked={todo.completed}
              readOnly
            />
          </span>
          <span>{todo.title}</span>
        </div>
      )}
    </>
  );
}
