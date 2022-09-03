import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './page/contato/contato.component';
import { Erro404Component } from './page/erro404/erro404.component';
import { HomeComponent } from './page/home/home.component';
import { PostsComponent } from './page/posts/posts.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'posts', component: PostsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Erro404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
