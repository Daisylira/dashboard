import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TransacaoComponent } from './transacao/transacao.component';
import { ExtratoComponent } from './extrato/extrato.component';

import {LOCALE_ID} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localePt, 'pt');




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TransacaoComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
