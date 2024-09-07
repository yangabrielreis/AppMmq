import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvalTecAovivoPageRoutingModule } from './aval-tec-aovivo-routing.module';

import { AvalTecAovivoPage } from './aval-tec-aovivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvalTecAovivoPageRoutingModule
  ],
  declarations: [AvalTecAovivoPage]
})
export class AvalTecAovivoPageModule {}
