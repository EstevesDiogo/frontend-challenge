import { Component, OnInit } from '@angular/core';
import { ElementService } from '../../../services/element/element.service';
import { ElementModel } from '../../../models/element/elementModel';

@Component( {
  selector: 'app-add-element',
  templateUrl: './add-element.component.html',
  styleUrls: [ './add-element.component.scss' ]
} )
export class AddElementComponent implements OnInit {
  elements: ElementModel[] = [];
  addIcon: string;

  constructor( private elementService: ElementService ) { }

  ngOnInit() {
    this.elements = this.elementService.elements;
    this.addIcon = this.elementService.addIcon;
  }

  addNewElement() {
    this.elements.push( { id: this.elements.length + 1, voice: '', text: '', isNew: true } );
  }
}
