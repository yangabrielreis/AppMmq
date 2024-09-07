import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvalTecnicasPageRoutingModule } from './aval-tecnicas-routing.module';

import { AvalTecnicasPage } from './aval-tecnicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvalTecnicasPageRoutingModule
  ],
  declarations: [AvalTecnicasPage]
})
export class AvalTecnicasPageModule {}
