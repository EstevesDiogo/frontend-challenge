import { browser, by, element } from 'protractor';

export class AppPage {
  static navigateTo() {
    return browser.get( browser.baseUrl ) as Promise<any>;
  }

  static getTitleText() {
    return element( by.css( 'span' ) ).getText() as Promise<string>;
  }

  static getUploadIcon() {
    return element( by.css( 'img' ) ).click() as Promise<void>;
  }

  static getShowIcon() {
    return element( by.css( 'img' ) ).click() as Promise<void>;
  }

}
