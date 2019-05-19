import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe( 'workspace-project App', () => {
  let page: AppPage;

  beforeEach( () => {
    page = new AppPage();
  } );

  it( 'should display app title', () => {
    AppPage.navigateTo();
    expect( AppPage.getTitleText() ).toEqual( 'Transcriptions' );
  } );

  it( 'should display the upload icon', () => {
    AppPage.navigateTo();
    expect( AppPage.getUploadIcon ).toBeTruthy();
  } );

  it( 'should display the show icon', () => {
    AppPage.navigateTo();
    expect( AppPage.getShowIcon ).toBeTruthy();
  } );

  afterEach( async () => {
    const logs = await browser.manage().logs().get( logging.Type.BROWSER );
    expect( logs ).not.toContain( jasmine.objectContaining( {
      level: logging.Level.SEVERE,
    } as logging.Entry ) );
  } );
} );
