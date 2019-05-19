import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementComponent } from './element.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ElementModel } from '../../../models/element/elementModel';
import { EventEmitter } from '@angular/core';

describe( 'ElementComponent', () => {
  let component: ElementComponent;
  let fixture: ComponentFixture<ElementComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
        declarations: [ ElementComponent ],
        imports: [
          FormsModule,
          HttpClientModule
        ]
      } )
      .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( ElementComponent );
    component = fixture.componentInstance;
    component.element = new ElementModel();
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );

  it( 'Element should be of type ElementModel', () => {
    component.element = { id: 1, voice: 'voice 2', text: 'text', isEditable: false };
    expect( typeof component.element.id ).toBe( 'number' );
    expect( typeof component.element.voice ).toBe( 'string' );
    expect( typeof component.element.text ).toBe( 'string' );
    expect( typeof component.element.isEditable ).toBe( 'boolean' );
  } );

  it( 'Person icon should exist', () => {
    expect( component.personIcon ).toBeTruthy();
  } );

  it( 'Person icon should be fetch from origin', () => {
    expect( component.personIcon ).toBe( '../../../assets/person.svg' );
  } );

  it( 'Delete icon should exist', () => {
    expect( component.deleteIcon ).toBeTruthy();
  } );

  it( 'Delete icon should be fetch from origin', () => {
    expect( component.deleteIcon ).toBe( '../../../assets/delete.svg' );
  } );

  it( 'Edit item event should exist', () => {
    expect( component.editElementEvent ).toBeTruthy();
  } );

  it( 'Edit element event should be of type EventEmitter', () => {
    expect( component.editElementEvent = new EventEmitter() ).toBeTruthy();
  } );

  it( 'Delete element event should exist', () => {
    expect( component.deleteElementEvent ).toBeTruthy();
  } );

  it( 'Delete element event should be of type EventEmitter ', () => {
    expect( component.deleteElementEvent = new EventEmitter() ).toBeTruthy();
  } );

  it( 'Save element event should exist', () => {
    expect( component.saveElementEvent ).toBeTruthy();
  } );

  it( 'Save element event should be of type EventEmitter', () => {
    expect( component.saveElementEvent = new EventEmitter() ).toBeTruthy();
  } );

  it( 'Method edit item Should exist', () => {
    expect( component.editItem ).toBeTruthy();
  } );

  it( 'Method delete item Should exist', () => {
    expect( component.deleteItem ).toBeTruthy();
  } );

  it( 'Method save item Should exist', () => {
    expect( component.saveItem ).toBeTruthy();
  } );
} );
