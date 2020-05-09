import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finalexam-app';

  start: number;
  end: number;
  numberSubmitted: boolean;
  evenNumbers: Array<any> = [];
  submit(start, end){
    this.numberSubmitted = true;
    if(start > end) {
      let temp;
      temp = start;
      start = end;
      end = temp;
    }
    for( let i=start; i<=end; i++){
      let result = this.isEven(i)
      if(result) {this.evenNumbers.push(i)}
    }
  }

  isEven(value) {
    if (value%2 == 0)
      return true;
    else
      return false;


  }
}