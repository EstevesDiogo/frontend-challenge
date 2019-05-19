import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable( {
  providedIn: 'root'
} )
export class HeaderService {
  title = 'Transcriptions';
  uploadIcon = '../../../assets/upload.svg';
  showIcon = '../../../assets/fetch-document.svg';
  showElements = false;
  private url = 'http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c';

  constructor( private http: HttpClient ) {
  }

  getElements() {
    return this.showElements = true;
  }

  postData( elements ) {
    return this.http.post( this.url, { data: elements } );
  }
}
