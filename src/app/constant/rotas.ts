import { HomeComponent } from '../page/home/home.component';
import { ContatoComponent } from '../page/contato/contato.component';
import { Erro404Component } from '../page/erro404/erro404.component';
import { PostsComponent } from '../page/posts/posts.component';
import { Routes } from '@angular/router';

export const rotas: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'posts', component: PostsComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Erro404Component },
];
