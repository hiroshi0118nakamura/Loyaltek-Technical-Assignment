export type ICard = {
  name: string;
  manaCost: string;
  cmc: number;
  colors: string[];
  type: string;
  types: string[];
  supertypes: string;
  text: string;
  power: number;
  toughness: number;
  artist: string;
};

export type IQueryArray = {
  types: string[];
  subtypes: string[];
  supertypes: string[];
  set: string[];
};

export type IQueryState = IQueryArray & {
  name: string;
};

export type IQuery = {
  key: IKey;
  value: string;
};

export type ICardQuery = {
  key: "name" | "set";
  value: string;
};

export type ISet = {
  code: string;
  name: string;
  type: string;
  booster: string[];
  releaseDate: string;
  block: string;
  onlineOnly: boolean;
};

export type ResponseGenerator = {
  config?: any;
  data: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
  error?: any;
};

export type IKey = "types" | "supertypes" | "subtypes" | "set";
