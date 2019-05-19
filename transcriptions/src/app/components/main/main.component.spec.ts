import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { AddElementComponent } from './add-element/add-element.component';
import { ElementComponent } from './element/element.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe( 'MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
        declarations: [
          MainComponent,
          AddElementComponent,
          ElementComponent
        ],
        imports: [
          HttpClientModule,
          FormsModule
        ]
      } )
      .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( MainComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );

  it( 'should exist elements property', () => {
    expect( component.elements ).toBeTruthy();
  } );

  it( 'elements should be a new array', () => {
    expect( component.elements = [] ).toBeTruthy();
    expect( component.elements.length === 0 ).toBeTruthy();
  } );

  it( 'elements should be an empty array at start', () => {
    expect( component.elements.length === 0 ).toBeTruthy();
  } );

  it( 'Property person icon should exist', () => {
    expect( component.personIcon ).toBeTruthy();
  } );

  it( 'Person icon should come from origin', () => {
    expect( component.personIcon ).toBe( '../../../assets/person.svg' );
  } );

  it( ' Property delete icon should exist', () => {
    expect( component.deleteIcon ).toBeTruthy();
  } );

  it( 'Delete icon should come from origin', () => {
    expect( component.deleteIcon ).toBe( '../../../assets/delete.svg' );
  } );

  it( 'Property show elements should be set to false', () => {
    expect( component.showElements ).toBe( false );
  } );

  it( 'Method delete item should exist', () => {
    expect( component.deleteItem ).toBeTruthy();
  } );

  it( 'Method delete item should return truthy data', () => {
    const elements = [
      { id: 1, voice: 'text', text: 'text' },
      { id: 2, voice: 'text', text: 'text' }
    ];
    expect( component.deleteItem( elements.length - 1 ) ).toBeTruthy();
  } );

  it( 'Method save item should exist', () => {
    expect( component.saveItem ).toBeTruthy();
  } );

  it( 'Method edit item should exist', () => {
    expect( component.editItem ).toBeTruthy();
  } );

  it( 'Method on change status should exist', () => {
    expect( component.onChangeStatus ).toBeTruthy();
  } );

  it( 'Method on change status should be set to false at first', () => {
    expect( component.onChangeStatus() ).toBe( false );
  } );
} );
