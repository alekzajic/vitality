import { useQuery } from '@tanstack/react-query';

const url = 'https://jsonplaceholder.typicode.com/posts/';
const get = (u: string) => fetch(u).then((response) => response.json());

export type Post = {
  id: number;
  user_id: number;
  title: string;
  body: string;
};

export const getPost = (id = 'vitality'): Promise<Post> => get(`${url}/${id}`);

export const usePost = (id = 'vitality') => {
  return useQuery<Post>(['post', id], () => getPost(id), { cacheTime: Infinity });
};
