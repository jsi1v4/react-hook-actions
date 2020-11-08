// import { httpClient } from 'src/tools/axios';
import { httpClientTesting } from 'src/tools/axios';

export interface Hero {
  name: string;
  level: number;
}

const heroes: Hero[] = [
  { name: 'Peter', level: 25 },
  { name: 'Tony', level: 50 },
  { name: 'Stephen', level: 99 }
];

export function getHeroes() {
  const randomHeroes = heroes.slice(0, Math.floor(Math.random() * heroes.length));
  return httpClientTesting<Hero[]>(randomHeroes);
  // return httpClient<Hero[]>({ url: `/api/heroes` });
}

export function getVillains() {
  return httpClientTesting<Hero[]>(undefined, 'You shall not pass...');
}
