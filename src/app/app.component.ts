import { Component, OnInit, ViewChild } from '@angular/core';
import { IonMenu } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  @ViewChild(IonMenu) ionMenu: IonMenu;

  public lista$: Observable<any>;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.lista$ = this.dataService.getMenuOpts();
  }
}
