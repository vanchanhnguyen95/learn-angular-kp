import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lai1IndexComponent } from './lai1-index/lai1-index.component';
import { Lai1IndexSliderModule } from './lai1-index/lai1-index-slider/lai1-index-slider.module';
import { Lai1IndexContentModule } from './lai1-index/lai1-index-content/lai1-index-content.module';
import { Lai1ItemModule } from './lai1-index/lai1-item/lai1-item.module';

@NgModule({
  imports: [
    CommonModule,Lai1IndexSliderModule, Lai1IndexContentModule, Lai1ItemModule
  ],
  exports: [Lai1IndexComponent],
  declarations: [Lai1IndexComponent]
})
export class Lai1IndexModule { }
