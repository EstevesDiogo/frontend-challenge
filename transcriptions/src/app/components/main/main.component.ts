import { Component, OnInit } from '@angular/core';
import { ElementModel } from '../../models/element/elementModel';
import { ElementService } from '../../services/element/element.service';
import { HeaderService } from '../../services/header/header.service';

@Component( {
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.scss' ]
} )
export class MainComponent implements OnInit {
  elements: ElementModel[] = [];
  personIcon: string;
  deleteIcon: string;
  showElements: boolean;

  constructor( private elementService: ElementService, private headerService: HeaderService ) { }

  ngOnInit() {
    this.elementService.getElements()
      .subscribe( data => {
        this.elements = data;
        this.elementService.elements = this.elements;
      } );
    this.personIcon = this.elementService.personIcon;
    this.deleteIcon = this.elementService.deleteIcon;
  }

  deleteItem( index: number ) {
    this.elements.splice( index, 1 );
  }

  saveItem( index: number ) {
    this.elements[ index ].isNew = false;
  }

  editItem( index: number ) {
    this.elements[ index ].isNew = true;
  }

  onChangeStatus() {
    return this.showElements = this.headerService.showElements;
  }

}
