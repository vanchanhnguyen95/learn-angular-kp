import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lai1Component } from './lai1/lai1.component';
import { Lai1HeaderModule } from './lai1/lai1-header/lai1-header.module';
import { Lai1IndexModule } from './lai1/lai1-index/lai1-index.module';
import { Lai1FooterModule } from './lai1/lai1-footer/lai1-footer.module';

@NgModule({
  imports: [
    CommonModule,Lai1HeaderModule,Lai1IndexModule,Lai1FooterModule
  ],
  exports: [
    Lai1Component
  ],
  declarations: [Lai1Component]
})
export class Lai1Module { }
