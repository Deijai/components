import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  public state = 'indeterminate';
  public value = 0.1;
  public title = 'Progress Bar';
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.state = 'determinate';
      for (let i = 0; i < 2; i++) {
        this.value += 0.1;
        console.log(this.value);
      }
    }, 5000);
  }

}
