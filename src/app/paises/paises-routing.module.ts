import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPaisesComponent } from './pages/main-paises/main-paises.component';

const routes: Routes = [
  {
    path: '',
    component: MainPaisesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
