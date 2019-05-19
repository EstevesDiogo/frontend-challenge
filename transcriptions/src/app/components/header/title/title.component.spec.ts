import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponent } from './title.component';
import { HttpClientModule } from '@angular/common/http';

describe( 'TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
        declarations: [ TitleComponent ],
        imports: [ HttpClientModule ]
      } )
      .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( TitleComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );

  it( 'should have a property called title', () => {
    expect( component.title ).toBeTruthy();
  } );

  it( 'title Should be equal to Transcriptions', () => {
    expect( component.title === 'Transcriptions' ).toBeTruthy();
  } );
} );
