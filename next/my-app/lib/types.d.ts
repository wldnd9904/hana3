export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
