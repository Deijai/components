import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MenuType } from '../interfaces/menuType';

interface DataProps {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  public getAll() {
    return this.http.get<DataProps>('https://jsonplaceholder.typicode.com/users');
  }

  public getMenuOpts() {
    return this.http.get('/assets/data/menu-opts.json');
  }

  public getAllAlbums() {
    return this.http.get<any[]>(' https://jsonplaceholder.typicode.com/users/1/albums');
  }

  public getSuper() {
    return this.http.get<any[]>('/assets/data/superheroes.json');
  }



}
