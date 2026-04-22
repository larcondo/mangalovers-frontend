export interface Artist {
  name: string;
}

export interface Publisher {
  name: string;
}

export interface PrintFormat {
  name: string;
  description?: string;
}

export interface Author {
  writer: Artist;
  illustrator: Artist;
}

export interface Series {
  id: string;
  name: string;
  publisher: Publisher;
  author: Author;
  printFormat: PrintFormat;
  urlCover?: string;
  isSingleVolume: boolean;
}

export interface Volume {
  id: string;
  number: number;
  title?: string;
  synopsis?: string;
  urlCover?: string;
  publicationDate?: string;
  series: Series;
}

export interface Credentials {
  username: string;
  password: string;
}

export type UserLogged = {
  username: string;
  email: string;
  isAdmin: boolean;
  accessToken: string;
};

export type UserInfo = Omit<UserLogged, "accessToken">;

export interface Auth {
  user: UserInfo | null;
  login: (data: UserLogged) => void;
  logout: () => void;
}
