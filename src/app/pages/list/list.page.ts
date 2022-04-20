import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';


interface DataProps {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(IonList) ionList: IonList;

  public title = 'List';
  public list$: Observable<DataProps>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
   this.list$ = this.dataService.getAll();
  }

  public update(item: any){
    this.ionList.closeSlidingItems();
    console.log(item);
  }

  public del(item: any){
    this.ionList.closeSlidingItems();
    console.log(item);
  }





}
