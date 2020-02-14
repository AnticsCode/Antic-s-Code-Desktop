interface Content {
  _id?: string;
  title?: string;
  category?: string;
  cover?: string;
  code?: Code[];
  tags?: string[];
  badges?: string[];
  likes?: number;
  stars?: number;
  links?: Link[];
  index?: Index[];
}

interface ServerResponse {
  ok: boolean;
  message?: string;
  err?: any;
}

export interface Code {
  code: string;
  lang: string;
  description: string;
  level: string;
  tags: string[];
  from: From;
}

export interface From {
  article: string;
  slug: string;
}

export interface Index {
  title: string;
  subtitle: string;
  id: string;
}

export interface Link {
  name: string;
  url: string;
}

export interface Article extends Content {
  message?: string;
  author?: string;
  created?: string;
  slug?: string;
  level?: string;
  views?: number;
  summary?: string;
  draft?: boolean;
  admin?: boolean;
}

interface Translation {
  translate: string;
}

export interface UserResponse extends ServerResponse {
  user: User;
  users?: User[];
  token?: string;
}

export interface ArticleResponse extends ServerResponse {
  articles?: Article[];
  page?: number;
}

export interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  account: string;
  profile?: UserProfile;
}

interface UserProfile {
  avatar?: string;
  rol?: string;
  bio?: string;
  facebook?: string;
  twitter?: string;
  github?: string;
  portfolio?: string;
  language?: string;
}

export interface MenuItem {
  name: string;
  link: string;
  icon: string;
}

export class CustomError {
  name: string;
  message: string;
  status?: number;
  text: string;
  url?: string;
  author?: string;
  date?: string;
  platform?: string;

  constructor(name: string,
              message: string,
              text: string,
              author: string,
              status: number = null,
              url: string = '',
              platform: string = '') {
    this.name = name;
    this.message = message;
    this.status = status;
    this.text = text;
    this.url = url;
    this.author = author;
    this.platform = platform;
  }
}