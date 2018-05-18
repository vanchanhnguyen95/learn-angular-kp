import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-form',
  templateUrl: './bt-form.component.html',
  styleUrls: ['./bt-form.component.css']
})
export class BtFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public email:string = "";
  public pass:string = "";

  DisplayPass(pass){
    // this.pass = pass.value;
  }

}
