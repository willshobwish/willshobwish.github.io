import { Routes } from '@angular/router';
import { Profile } from './pages/profile/profile';
export const routes: Routes = [
  {
    path: '',
    component: Profile,
    title: 'Perfil',
  },
  {
    path: 'research',
    loadComponent: () => import('./pages/research/research').then((m) => m.Research),
    title: 'Pesquisas',
  },
  {
    path: 'material',
    loadComponent: () => import('./pages/material/material').then((m) => m.Material),
    title: 'Materiais e cursos',
  },
  {
    path: 'templates',
    loadComponent: () => import('./pages/templates/templates').then((m) => m.Templates),
    title: 'Templates',
  },
  {
    path: 'repos',
    loadComponent: () => import('./pages/repos/repos').then((m) => m.Repos),
    title: 'Repositórios',
  },
];
