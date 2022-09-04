import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './page/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { ContatoComponent } from './page/contato/contato.component';
import { Erro404Component } from './page/erro404/erro404.component';
import { PostsComponent } from './page/posts/posts.component';
import localePT from '@angular/common/locales/pt';
import { SobreComponent } from './component/sobre/sobre.component';
import { LicenseComponent } from './component/license/license.component';

registerLocaleData(localePT);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ContatoComponent,
    Erro404Component,
    PostsComponent,
    SobreComponent,
    LicenseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-br' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
