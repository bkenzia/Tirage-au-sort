type PersonneJender = 'homme' | 'femme';
export interface Personne {
  id: number;
  name: string;
  genre: PersonneJender;
  isPresent: boolean;
}
export const PERSONNES: Personne[] = [
  {
    id: 1,
    name: 'Meriem',
    genre: 'femme',
    isPresent: true,
  },
  {
    id: 2,
    name: 'Patrick',
    genre: 'homme',
    isPresent: true,
  },
  {
    id: 3,
    name: 'Monia',
    genre: 'femme',
    isPresent: true,
  },
  {
    id: 4,
    name: 'Yasser',
    genre: 'homme',
    isPresent: true,
  },
  {
    id: 5,
    name: 'Camille',
    genre: 'femme',
    isPresent: true,
  },
  {
    id: 6,
    name: 'Meriem6',
    genre: 'femme',
    isPresent: false,
  },
  {
    id: 7,
    name: 'Anais',
    genre: 'femme',
    isPresent: false,
  },
  {
    id: 8,
    name: 'thomas',
    genre: 'homme',
    isPresent: false,
  },
  {
    id: 9,
    name: 'erdal',
    genre: 'homme',
    isPresent: false,
  },
];
