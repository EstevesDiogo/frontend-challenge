import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../services/header/header.service';

@Component( {
  selector: 'app-show-elements',
  templateUrl: './show-elements.component.html',
  styleUrls: [ './show-elements.component.scss' ]
} )
export class ShowElementsComponent implements OnInit {
  showIcon: string;
  showElements: boolean;

  constructor( private headerService: HeaderService ) { }

  ngOnInit() {
    this.showIcon = this.headerService.showIcon;
  }

  onFetchClick() {
    return this.showElements = this.headerService.getElements();
  }

}
