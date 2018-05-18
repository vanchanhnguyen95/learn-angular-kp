import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  name = '';
  password = '';
  constructor() { }

  ngOnInit() {
  }

  showEvent(event){
    this.name = event.target.value;
  }

  showPassword(password){
    this.password = password.target.value;
  }

  isHightlight = true;

  currentStyle = {color: 'red', fontSize: '50px'};
  evenStyle = {color: 'red', fontSize: '40px'};
  oddStyle = {color: 'black', fontSize: '20px'};

  currentClass = {circle : !this.isHightlight, square: this.isHightlight};

}
