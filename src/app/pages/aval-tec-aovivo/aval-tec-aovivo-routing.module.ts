import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvalTecAovivoPage } from './aval-tec-aovivo.page';

const routes: Routes = [
  {
    path: '',
    component: AvalTecAovivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvalTecAovivoPageRoutingModule {}
