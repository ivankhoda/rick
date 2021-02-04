type Place = {
  name: string;
  url: string;
};
// type Episodes = {
//   episodes: any[];
// };

export type Character = {
  name: string;
  status: string[];
  species: string;
  gender: string;
  type: string;
  id: number;
  image: string;
  origin: Place;
  location: Place;
  episode: any[];
};
