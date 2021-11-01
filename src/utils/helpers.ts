type CharacterQuery = {
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
};

export const createQuery = (query: string, queryOptions: void) => {
  let filteredQuery = query + queryOptions;
  return filteredQuery;
};

export const removeLastSymbol = (props: string) => {
  let str;
  str = props.substring(0, props.length - 1);
  return str;
};
export const makeInputValuesToString = (props: object, callback: (arg: string) => void) => {
  let str = "";

  for (const [p, value] of Object.entries(props)) {
    str += `${p}=${value.toLowerCase()}&`;
  }
  return callback(str);
};

export const removeEmptyInputs = (props: CharacterQuery) => {
  let empty = null || undefined || 0;

  let filteredObject = Object.fromEntries(Object.entries(props).filter(([key, value]) => value!.length !== empty));

  return filteredObject;
};
