import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  output: number = 0;
  first: number = 0;
  second: number = 0;
  operator = '';

  setFirst(value: any) {
    this.first = Number(value);
    console.log(this.first)
  }

  setSecond(value: any) {
    this.second = Number(value);
  }

  setOperator(value: any) {
    this.operator = value;
  }

  calculate() {
    switch (this.operator) {
      case '+' :
        this.output = this.first + this.second;
        break;
      case '-':
        this.output = this.first - this.second;
        break;
      case '*':
        this.output = this.first * this.second;
        break;
      case '/':
        this.output = this.first / this.second;
        break;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
