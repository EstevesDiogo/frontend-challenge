import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ElementService } from '../../../services/element/element.service';
import { ElementModel } from '../../../models/element/elementModel';

@Component( {
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: [ './element.component.scss' ]
} )
export class ElementComponent implements OnInit {
  @Input() element: ElementModel;
  personIcon: string;
  deleteIcon: string;
  checked: boolean;

  @Output() editElementEvent = new EventEmitter();
  @Output() deleteElementEvent = new EventEmitter();
  @Output() saveElementEvent = new EventEmitter();

  constructor( private elementService: ElementService ) {
    this.personIcon = this.elementService.personIcon;
    this.deleteIcon = this.elementService.deleteIcon;
  }

  ngOnInit() {
  }

  editItem() {
    return this.editElementEvent.emit();
  }

  deleteItem() {
    return this.deleteElementEvent.emit();
  }

  saveItem() {
    return this.saveElementEvent.emit();
  }

}
