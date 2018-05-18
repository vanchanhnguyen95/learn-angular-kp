import { Component, OnInit } from '@angular/core';
import{FormsModule} from'@angular/forms';

@Component({
  selector: 'app-one-way-bin-ding',
  templateUrl: './one-way-bin-ding.component.html',
  styleUrls: ['./one-way-bin-ding.component.css']
})
export class OneWayBinDingComponent implements OnInit {

  //Interpolation Binding:{{tenbien}} hoặc {{tenham()}}
    name:string = 'luckylemon';

  //Property binding:Binding thông qua thuộc tính value của thẻ input: [value]
  bien: string = 'hello';

  ng:string = 'hello';

  //Event Binding: (sự kiện) = “phương thức xử lý”
  thamso:string = 'su kien';
  DisplayName(thamso){
    console.log(thamso.value);
  }


  constructor() { }

  ngOnInit() {
  }

}
