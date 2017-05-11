import { browser, element, by } from 'protractor';

export class ShirtPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tse-root h1')).getText();
  }
}
