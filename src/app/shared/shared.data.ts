import { SocialIcon, MenuItem, StatusButton } from "./interfaces/interfaces";

export const SocialMedia: SocialIcon[] = [
  { name: 'github', color: 'basic' },
  { name: 'twitter', color: 'info' },
  { name: 'portfolio', color: 'success' }
];

export const MenuItems: MenuItem[] = [
  { name: 'Home', link: '/home', icon: 'home-outline' },
  { name: 'Noticias', link: './news', icon: 'cast-outline' },
  { name: 'Artículos', link: './articles', icon: 'file-text-outline' },
  { name: 'Escritores', link: './writers', icon: 'edit-2-outline' },
  { name: 'Ayuda', link: './help', icon: 'question-mark-circle-outline' }
];

export const CATEGORIES: string[] = [
  'HTML',
  'CSS',
  'Javascript',
  'Angular',
  'Nodejs',
  'MongoDB',
  'Android'
];

export const LANGUAGES: string[] = [
  'HTML',
  'CSS',
  'SCSS',
  'Javascript',
  'Typescript',
  'Nodejs',
  'JSON',
  'Terminal',
  'Android',
  'Kotlin'
];

export const TAGS: string[] = [
  'Consola',
  'Desarrollo',
  'Diseño',
  'Material',
  'Frontend',
  'Backend',
  'Typescript',
  'Database',
  'Mobile',
  'Ionic',
  'Config'
];

export const LEVELS: string[] = [
  'Básico',
  'Medio',
  'Avanzado'
];

export const BADGES: string[] = [
  'Nuevo',
  'Destacado',
  'Popular'
];

export const StatusButtons: StatusButton[] = [
  { status: 'warning', name: 'Draft' },
  { status: 'danger', name: 'Pending'},
  { status: 'info', name: 'Hidden' },
  { status: 'basic', name: 'All' }
]


