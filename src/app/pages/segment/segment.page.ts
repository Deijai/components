import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  public title = 'Segment';
  superHeroes$: Observable<any[]>;
  public segmentCurrent = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.superHeroes$ = this.dataService.getSuper();
  }

  public segmentChanged(event: any): void {
    if( event.detail.value === 'todos' ){
      console.log('aqui');
        this.segmentCurrent = '';
    } else {
      this.segmentCurrent = event.detail.value;
    }
      console.log(event);
  }

}
