import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe( 'workspace-project App', () => {
  let page: AppPage;

  beforeEach( () => {
    page = new AppPage();
  } );

  it( 'should display welcome message', () => {
    AppPage.navigateTo();
    expect( AppPage.getTitleText() ).toEqual( 'Transcriptions' );
    AppPage.clickUpload();
    // wait for sometime.
    // expect(AppPage.getData()).toEqual(value);
    // AppPage.saveClick()
  } );

  afterEach( async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get( logging.Type.BROWSER );
    expect( logs ).not.toContain( jasmine.objectContaining( {
      level: logging.Level.SEVERE,
    } as logging.Entry ) );
  } );
} );
