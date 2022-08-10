import { useQuery } from '@tanstack/react-query'

// import { Query, useQuery } from '@/hooks'

const url = 'https://api.github.com/repos/alekzajic'
const get = (url: string) => fetch(url).then((response) => response.json())

export type Repo = {
  id: string
  name: string
  description: string
  html_url: string
}

export const getRepo = (name = 'vitality'): Promise<Repo> => get(`${url}/${name}`)

// export const useRepo = (name = 'vitality'): Query<Repo> => {
export const useRepo = (name = 'vitality') => {
  return useQuery<Repo>(['repo', name], () => getRepo(name), { cacheTime: Infinity })
}
