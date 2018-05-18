import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructComponent } from './struct/struct.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  exports: [StructComponent],
  declarations: [StructComponent]
})
export class StructModule { }
