import { browser, by, element } from 'protractor';

export class AppPage {
  static navigateTo() {
    return browser.get( browser.baseUrl ) as Promise<any>;
  }

  static getTitleText() {

    return element( by.css( 'body > app-root > app-header > header > app-title > span' ) ).getText() as Promise<string>;
  }

  static clickUpload() {
    element( by.css( 'body > app-root > app-header > header > div > app-send-elements > img' ) ).click();
  }

}
