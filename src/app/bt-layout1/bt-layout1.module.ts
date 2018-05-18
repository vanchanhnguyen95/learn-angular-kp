import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtLayout1Component } from './bt-layout1/bt-layout1.component';
import { BtLayout1HeaderModule } from './bt-layout1-header/bt-layout1-header.module';
import { BtLayout1IndexModule } from './bt-layout1-index/bt-layout1-index.module';
import { BtLayout1IndexSliderModule } from './bt-layout1-index/bt-layout1-index-slider/bt-layout1-index-slider.module';
import { BtLayout1IndexContentModule } from './bt-layout1-index/bt-layout1-index-content/bt-layout1-index-content.module';
import { BtLayout1FooterModule } from './bt-layout1-footer/bt-layout1-footer.module';

@NgModule({
  imports: [
    CommonModule,BtLayout1HeaderModule,BtLayout1IndexModule,BtLayout1IndexSliderModule,BtLayout1IndexContentModule,
    BtLayout1FooterModule
  ],
  exports: [BtLayout1Component],
  declarations: [BtLayout1Component]
})
export class BtLayout1Module { }
