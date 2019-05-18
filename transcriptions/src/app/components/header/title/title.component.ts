import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../services/header/header.service';

@Component( {
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: [ './title.component.scss' ]
} )
export class TitleComponent implements OnInit {
  title: string;

  constructor( private headerService: HeaderService ) { }

  ngOnInit() {
    this.title = this.headerService.title;
  }

}
