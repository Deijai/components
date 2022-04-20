import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  public title = 'Search';

  public albums: any[] = [];
  public buscaText = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
     this.dataService.getAllAlbums().subscribe( albums => {
      this.albums = albums;
     });
  }

  public onSearchChange(event: any) {
    this.buscaText = event.detail.value;
  }

}
