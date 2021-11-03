type Place = {
  name: string;
  url: string;
};

export type Char = {
  name?: string;
  status?: string[];
  species?: string;
  gender?: string;
  type?: string;
  id?: number;
  image?: string;
  origin?: Place;
  location?: Place;
  episode?: any[];
};
