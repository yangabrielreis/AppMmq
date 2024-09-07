import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvalTecnicasPage } from './aval-tecnicas.page';

const routes: Routes = [
  {
    path: '',
    component: AvalTecnicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvalTecnicasPageRoutingModule {}
