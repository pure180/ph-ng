import { browser, element, by } from 'protractor';

export class PaperhiveFrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ph-root ph-home p')).getText();
  }
}
