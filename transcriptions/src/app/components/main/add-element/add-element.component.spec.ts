import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddElementComponent } from './add-element.component';
import { HttpClientModule } from '@angular/common/http';

describe( 'AddElementComponent', () => {
  let component: AddElementComponent;
  let fixture: ComponentFixture<AddElementComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
        declarations: [ AddElementComponent ],
        imports: [ HttpClientModule ]
      } )
      .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( AddElementComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );

  it( 'Elements property should exist', () => {
    expect( component.elements ).toBeTruthy();
  } );

  it( 'Elements property should be a empty array at start', () => {
    expect( component.elements.length === 0 ).toBeTruthy();
  } );

  it( 'Add icon property should exist', () => {
    expect( component.addIcon ).toBeTruthy();
  } );

  it( 'Add icon property should be fetch from origin', () => {
    expect( component.addIcon ).toBe( '../../../assets/add-row.svg' );
  } );

  it( 'Method add new element should exist', () => {
    expect( component.addNewElement ).toBeTruthy();
  } );

  it( 'Method add new element should return new object of type ElementModel', () => {
    expect( component.addNewElement() ).toBe( 1 );
  } );
} );
