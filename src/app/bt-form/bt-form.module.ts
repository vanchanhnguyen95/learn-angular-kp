import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtFormComponent } from './bt-form/bt-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  exports: [BtFormComponent],
  declarations: [BtFormComponent]
})
export class BtFormModule { }
