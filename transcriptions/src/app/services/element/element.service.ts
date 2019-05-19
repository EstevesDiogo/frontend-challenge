import { Injectable } from '@angular/core';
import { ElementModel } from '../../models/element/elementModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class ElementService {
  personIcon = '../../../assets/person.svg';
  deleteIcon = '../../../assets/delete.svg';
  addIcon = '../../../assets/add-row.svg';
  elements: ElementModel[] = [];
  private url = 'http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c';

  constructor( private http: HttpClient ) {
  }

  getElements(): Observable<ElementModel[]> {
    return this.http.get<ElementModel[]>( this.url );
  }
}
