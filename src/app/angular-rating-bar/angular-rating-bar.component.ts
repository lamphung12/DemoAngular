import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-angular-rating-bar',
  templateUrl: './angular-rating-bar.component.html',
  styleUrls: ['./angular-rating-bar.component.css']
})
export class AngularRatingBarComponent implements OnInit {
  @Input() start: any

  temp: any
  interval: any

  ngOnInit(): void {
    this.temp = this.start
  }

  loading() {
    if (this.start != 0) {
      this.interval = setInterval(() => {
        this.start = +this.start - 1;
        if (this.start == 0) {
          clearInterval(this.interval);
        }
      }, 200);
    }
  }

  reset() {
    clearInterval(this.interval)
    this.start = this.temp
  }

  stop() {
    clearInterval(this.interval)
  }


  constructor() { }


}
