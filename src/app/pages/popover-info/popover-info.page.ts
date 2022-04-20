import { Component, OnInit, ViewChild } from '@angular/core';
import { IonPopover, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.page.html',
  styleUrls: ['./popover-info.page.scss'],
})
export class PopoverInfoPage implements OnInit {

  @ViewChild(IonPopover) ionPopover: IonPopover;
  public items: any[] = [
    {title: 'Ionic', doc: 'Ionic Docs'},
    {title: 'Angular', doc: 'Angular Docs'},
    {title: 'React', doc: 'React Docs'}
  ];

  constructor(public popoverController: PopoverController) {}

  ngOnInit() {
  }

  public onClick(item: any): void {
    console.log(item);
    this.popoverController.dismiss();
  }

}
