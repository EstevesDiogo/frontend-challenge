import { TestBed } from '@angular/core/testing';

import { HeaderService } from './header.service';
import { HttpClientModule } from '@angular/common/http';

describe( 'HeaderService', () => {
  beforeEach( () => TestBed.configureTestingModule( {
    imports: [ HttpClientModule ]
  } ) );

  it( 'should be created', () => {
    const service: HeaderService = TestBed.get( HeaderService );
    expect( service ).toBeTruthy();
  } );

  it( 'Header title Should be equal to Transcriptions', () => {
    const service: HeaderService = TestBed.get( HeaderService );
    expect( service.title ).toBe( 'Transcriptions' );
  } );

  it( 'Upload icon needs to set to location', () => {
    const service: HeaderService = TestBed.get( HeaderService );
    expect( service.uploadIcon === '../../../assets/upload.svg' ).toBeTruthy();
  } );

  it( 'Show icon needs to set to location', () => {
    const service: HeaderService = TestBed.get( HeaderService );
    expect( service.showIcon === '../../../assets/fetch-document.svg' ).toBeTruthy();
  } );

  it( 'Show elements should be set to false', () => {
    const service: HeaderService = TestBed.get( HeaderService );
    expect( service.showElements ).toBe( false );
  } );

  it( 'Get elements should return true', () => {
    const service: HeaderService = TestBed.get( HeaderService );
    expect( service.getElements() ).toBe( true );
  } );

  it( 'Post data should return always 3 objects', ( done: DoneFn ) => {
    const service: HeaderService = TestBed.get( HeaderService );
    const data = [ { id: 1, voice: 'text', text: 'some text' } ];
    service.postData( data ).subscribe( ( res: any ) => {
      expect( res.length ).toBe( 3 );
      done();
    } );
  } );

  it( 'Post data at index zero property voice should be Voice 2', ( done: DoneFn ) => {
    const service: HeaderService = TestBed.get( HeaderService );
    const data = [ { id: 1, voice: 'text', text: 'some text' } ];
    service.postData( data ).subscribe( ( res: any ) => {
      expect( res[ 0 ].voice === 'Voice 2' ).toBeTruthy();
      done();
    } );
  } );
} );
