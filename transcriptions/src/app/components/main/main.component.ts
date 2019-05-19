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
    return this.elements.splice( index, 1 );
  }

  saveItem( index: number ) {
    return this.elements[ index ].isEditable = false;
  }

  editItem( index: number ) {
    return this.elements[ index ].isEditable = true;
  }

  onChangeStatus() {
    return this.showElements = this.headerService.showElements;
  }

}
