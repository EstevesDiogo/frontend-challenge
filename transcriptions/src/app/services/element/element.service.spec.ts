import { TestBed } from '@angular/core/testing';

import { ElementService } from './element.service';
import { HttpClientModule } from '@angular/common/http';

describe( 'ElementService', () => {
  beforeEach( () => TestBed.configureTestingModule( {
    imports: [ HttpClientModule ]
  } ) );

  it( 'should be created', () => {
    const service: ElementService = TestBed.get( ElementService );
    expect( service ).toBeTruthy();
  } );

  it( 'When initialized the element count should be 0', () => {
    const service: ElementService = TestBed.get( ElementService );
    expect( service.elements.length === 0 ).toBeTruthy();
  } );

  it( 'Person icon needs to set to location ', () => {
    const service: ElementService = TestBed.get( ElementService );
    expect( service.personIcon === '../../../assets/person.svg' ).toBeTruthy();
  } );
} );
