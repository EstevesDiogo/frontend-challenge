import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header/header.service';
import { ElementService } from '../../services/element/element.service';

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
} )
export class HeaderComponent implements OnInit {
  title: string;
  uploadIcon: string;
  showIcon: string;
  showElements: boolean;

  constructor( private headerService: HeaderService, private elementService: ElementService ) { }

  ngOnInit() {
    this.title = this.headerService.title;
    this.uploadIcon = this.headerService.uploadIcon;
    this.showIcon = this.headerService.showIcon;
  }

  onPostClick() {
    this.headerService.postData( this.elementService.elements );
    console.log( this.elementService.elements );
  }

  onFetchClick() {
    this.showElements = this.headerService.getElements();
  }
}
