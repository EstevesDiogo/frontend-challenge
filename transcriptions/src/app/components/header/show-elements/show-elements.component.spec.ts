import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowElementsComponent } from './show-elements.component';
import { HttpClientModule } from '@angular/common/http';

describe( 'ShowElementsComponent', () => {
  let component: ShowElementsComponent;
  let fixture: ComponentFixture<ShowElementsComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
        declarations: [ ShowElementsComponent ],
        imports: [ HttpClientModule ]
      } )
      .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( ShowElementsComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );

  it( 'should have a property called showIcons', () => {
    expect( component.showIcon ).toBeTruthy();
  } );

  it( 'Show icons should have this origin', () => {
    expect( component.showIcon ).toBe( '../../../assets/fetch-document.svg' );
  } );

  it( 'On fetch click should return true', () => {
    expect( component.onFetchClick() ).toBe( true );
  } );
} );
