import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routing';

import { HomeComponent } from './home/home.component';
import { TituloComponent } from './home/components/titulo/titulo.component';
import { KindoneComponent } from './home/components/kindone/kindone.component';
import { KindtwoComponent } from './home/components/kindtwo/kindtwo.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
       HomeComponent,
       TituloComponent,
       KindoneComponent,
       KindtwoComponent
    ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PipesModule
  ],
  exports: [
    HomeComponent,
    TituloComponent,
    KindoneComponent,
    KindtwoComponent
  ]
})
export class PagesModule { }
