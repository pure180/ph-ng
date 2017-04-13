import { PaperhiveFrontendNgPage } from './app.po';

describe('paperhive-frontend-ng App', () => {
  let page: PaperhiveFrontendNgPage;

  beforeEach(() => {
    page = new PaperhiveFrontendNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
