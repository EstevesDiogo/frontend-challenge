import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendElementsComponent } from './send-elements.component';
import { HttpClientModule } from '@angular/common/http';

describe( 'SendElementsComponent', () => {
  let component: SendElementsComponent;
  let fixture: ComponentFixture<SendElementsComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
        declarations: [ SendElementsComponent ],
        imports: [ HttpClientModule ]
      } )
      .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( SendElementsComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );

  it( 'should have a property called uploadIcon', () => {
    expect( component.uploadIcon ).toBeTruthy();
  } );

  it( 'Upload icon should have this origin', () => {
    expect( component.uploadIcon ).toBe( '../../../assets/upload.svg' );
  } );

  it( 'On post click at index zero property voice should be Voice 2', ( done: DoneFn ) => {
    component.onPostClick().subscribe( ( res: any ) => {
      expect( res[ 0 ].voice === 'Voice 2' ).toBeTruthy();
      done();
    } );
  } );
} );
