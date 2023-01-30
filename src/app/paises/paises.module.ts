import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { MainPaisesComponent } from './pages/main-paises/main-paises.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainPaisesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PaisesRoutingModule,

  ],
  exports: [
  ],
  providers: [
  ]
})
export class PaisesModule { }
