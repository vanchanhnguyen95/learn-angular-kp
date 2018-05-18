import {Component} from '@angular/core';
@Component({
    templateUrl: './word.component.html',
    styleUrls: ['./word.component.css'],
    selector: 'app-word'
})
export class WordComponent{
    en:string = 'Hello every one';
    vn:string = 'Xin chào mọi người';
    imgUrl = '../../../../meo.jpg';

    forgot = false;

    toggleForgot() {
        this.forgot = !this.forgot;
    }

}