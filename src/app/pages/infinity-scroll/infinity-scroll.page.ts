import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-infinity-scroll',
  templateUrl: './infinity-scroll.page.html',
  styleUrls: ['./infinity-scroll.page.scss'],
})
export class InfinityScrollPage implements OnInit {

  public title = 'Infinity Scroll';

  data: number[] = Array(20);
  constructor() { }

  ngOnInit() {
  }

  loadData(event: any) {
    const novoValor: number[] = Array(20);
    setTimeout(() => {
      this.data.push(...novoValor);
      event.target.complete();
    }, 1500);
  }

}
