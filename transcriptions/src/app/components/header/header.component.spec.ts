import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { TitleComponent } from './title/title.component';
import { ShowElementsComponent } from './show-elements/show-elements.component';
import { SendElementsComponent } from './send-elements/send-elements.component';
import { HttpClientModule } from '@angular/common/http';

describe( 'HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
        declarations: [
          HeaderComponent,
          TitleComponent,
          ShowElementsComponent,
          SendElementsComponent
        ],
        imports: [ HttpClientModule ]
      } )
      .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( HeaderComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
