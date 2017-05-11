import { ShirtPage } from './app.po';

describe('shirt App', () => {
  let page: ShirtPage;

  beforeEach(() => {
    page = new ShirtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tse works!');
  });
});
