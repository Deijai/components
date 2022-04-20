import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.page.html',
  styleUrls: ['./refresh.page.scss'],
})
export class RefreshPage implements OnInit {

  public title = 'Refresh';

  public items: any[] = [
    {title: 'Ionic', doc: 'Ionic Docs'},
    {title: 'Angular', doc: 'Angular Docs'},
    {title: 'React', doc: 'React Docs'}
  ];

  constructor() { }

  ngOnInit() {


  }

  public doRefresh(event: any): void {
    setTimeout(() => {
      this.items = [...this.items,
        {title: 'React Native', doc: 'React Native Docs'},
        {title: 'Node', doc: 'Node Docs'},
        {title: 'Java', doc: 'Java Docs'}
      ];
      event.detail.complete();
    }, 3000);
  }

}
