import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtLayout1IndexComponent } from './bt-layout1-index/bt-layout1-index.component';
import { BtLayout1IndexSliderModule } from './bt-layout1-index-slider/bt-layout1-index-slider.module';
import { BtLayout1IndexContentModule } from './bt-layout1-index-content/bt-layout1-index-content.module';

@NgModule({
  imports: [
    CommonModule, BtLayout1IndexSliderModule, BtLayout1IndexContentModule
  ],
  exports: [BtLayout1IndexComponent],
  declarations: [BtLayout1IndexComponent]
})
export class BtLayout1IndexModule { }
