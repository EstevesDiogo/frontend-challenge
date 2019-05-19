import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../services/header/header.service';
import { ElementService } from '../../../services/element/element.service';

@Component( {
  selector: 'app-send-elements',
  templateUrl: './send-elements.component.html',
  styleUrls: [ './send-elements.component.scss' ]
} )
export class SendElementsComponent implements OnInit {
  uploadIcon: string;

  constructor( private headerService: HeaderService, private elementService: ElementService ) { }

  ngOnInit() {
    this.uploadIcon = this.headerService.uploadIcon;
  }

  onPostClick() {
    return this.headerService.postData( this.elementService.elements
      .map( element => {
          return { id: element.id, voice: element.voice, text: element.text };
        }
      )
    );
  }

}
