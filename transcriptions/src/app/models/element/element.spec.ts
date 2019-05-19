import { ElementModel } from './elementModel';

describe( 'ElementModel', () => {
  it( 'should create an instance', () => {
    expect( new ElementModel() ).toBeTruthy();
  } );

  it( 'should create an instance', () => {
    expect( typeof new ElementModel() === 'object' ).toBeTruthy();
  } );
} );
