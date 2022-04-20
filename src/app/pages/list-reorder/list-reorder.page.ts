import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  public title = 'List Reorder';
  public checked = false;
  constructor() { }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public heros: string[] = [
    'Super Man', 'Flash', 'Mulher Maravilha', 'Batman', 'Aquaman'
  ];

  ngOnInit(): void {
  }

  public doReorder(event: any): void {
    console.log(event);
    event.detail.complete();
  }

  public toggleCheck(): void {
      this.checked = !this.checked;
  }

}
