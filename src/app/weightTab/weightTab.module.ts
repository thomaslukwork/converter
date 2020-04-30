import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { WeightTabPage } from './weightTab.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: WeightTabPage }])
  ],
  declarations: [WeightTabPage]
})
export class WeightTabPageModule { }
