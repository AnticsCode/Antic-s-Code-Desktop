interface Content {
  _id?: string;
  title?: string;
  category?: string;
  cover?: string;
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
  user?: string;
  author?: string;
  created?: string;
  slug?: string;
  level?: string;
  views?: number;
  summary?: string;
  status?: string;
  check?: Check;
}

export interface UserResponse extends ServerResponse {
  user: User;
  users?: User[];
  token?: string;
}

export interface ArticleResponse extends ServerResponse {
  articles?: Article[];
  article?: Article;
  page?: number;
  draft?: Article;
  drafts?: Article[];
}

export interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  account: string;
  profile?: UserProfile;
}

export interface UserProfile {
  avatar?: string;
  rol?: string;
  bio?: string;
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

export interface HeaderAction {
  icon: string;
  link: string;
  status?: string;
}

export interface SocialIcon {
  name: string;
  link?: string;
  color: string;
}

export interface StatusButton {
  status: string;
  name: string;
}

export interface Check {
  hasGoodTitle?: CheckStatus;
  hasGoodCategory?: CheckStatus;
  hasGoodTags?: CheckStatus;
  hasGoodBadges?: CheckStatus;
  hasGoodLevel?: CheckStatus;
  hasGoodLinks?: CheckStatus;
  hasGoodCover?: CheckStatus;
  hasGoodSummary?: CheckStatus;
  hasGoodMessage?: CheckStatus;
}

export interface CheckStatus {
  ok?: boolean;
  cause?: string;
}

export interface CheckStatusList {
  name: string;
  hint: string;
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
