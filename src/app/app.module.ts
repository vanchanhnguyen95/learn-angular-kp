import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Import FormsModule
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';

//import WordComponent
import { WordComponent } from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { Bt1HeaderModule } from './bt1/bt1-header/bt1-header.module';
import {Bt1Module } from './bt1/bt1.module';
import { Bt1ContentModule } from './bt1/bt1-content/bt1-content.module';
import { Bt1FooterModule } from './bt1/bt1-footer/bt1-footer.module';
/*Bài tập layout1*/
import { BtLayout1Module } from './bt-layout1/bt-layout1.module';
import { BtLayout1HeaderModule } from './bt-layout1/bt-layout1-header/bt-layout1-header.module';
import { BtLayout1IndexModule } from './bt-layout1/bt-layout1-index/bt-layout1-index.module';
import { BtLayout1IndexSliderModule } from './bt-layout1/bt-layout1-index/bt-layout1-index-slider/bt-layout1-index-slider.module';
import { BtLayout1IndexContentModule } from './bt-layout1/bt-layout1-index/bt-layout1-index-content/bt-layout1-index-content.module';
import { BtLayout1FooterModule } from './bt-layout1/bt-layout1-footer/bt-layout1-footer.module';
import { OneWayBinDingModule } from './one-way-bin-ding/one-way-bin-ding.module';
import { Lai1Module } from './lai1/lai1.module';
import { StructModule } from './struct/struct.module';


@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, Bt1Module, Bt1HeaderModule,Bt1ContentModule, Bt1FooterModule,
    BtLayout1Module,BtLayout1HeaderModule,BtLayout1IndexModule,BtLayout1IndexSliderModule,
    BtLayout1IndexContentModule,BtLayout1FooterModule,
    OneWayBinDingModule, Lai1Module, StructModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
