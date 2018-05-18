import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bt1Component } from './bt1/bt1.component';
import { Bt1HeaderModule } from './bt1-header/bt1-header.module';
import { Bt1ContentModule } from './bt1-content/bt1-content.module';
import { Bt1FooterModule } from './bt1-footer/bt1-footer.module';

@NgModule({
  imports: [
    CommonModule, Bt1HeaderModule, Bt1ContentModule, Bt1FooterModule
  ],
  exports:[
    Bt1Component
  ],
  declarations: [Bt1Component]
})
export class Bt1Module { }
