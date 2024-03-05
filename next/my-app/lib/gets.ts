import { Todo, User } from './types';

const BaseURL = 'http://jsonplaceholder.typicode.com/';

export async function getTodo(todoId: number): Promise<Todo | null> {
  try {
    const res = await fetch(`${BaseURL}/todos/${todoId}`, {
      cache: 'no-store',
    });
    return res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
    }
    return null;
  }
}

export async function getTodos(userId: number): Promise<Todo[]> {
  try {
    const res = await fetch(`${BaseURL}/todos?userId=${userId}`, {
      cache: 'no-store',
    });
    return res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
    }
    return [];
  }
}
export async function getUsers(): Promise<User[]> {
  try {
    const res = await fetch(`${BaseURL}/users`, {
      cache: 'no-store',
    });
    return res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
    }
    return [];
  }
}
