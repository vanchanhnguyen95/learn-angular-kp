import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneWayBinDingComponent } from './one-way-bin-ding/one-way-bin-ding.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    OneWayBinDingComponent
  ],
  declarations: [OneWayBinDingComponent]
})
export class OneWayBinDingModule { }
