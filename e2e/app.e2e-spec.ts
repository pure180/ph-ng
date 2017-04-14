import { PaperhiveFrontendPage } from './app.po';

describe('paperhive-frontend', () => {
  let page: PaperhiveFrontendPage;

  beforeEach(() => {
    page = new PaperhiveFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('home works!');
  });
});
