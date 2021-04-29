import { SmartnewsPage } from './app.po';

describe('smartnews App', () => {
  let page: SmartnewsPage;

  beforeEach(() => {
    page = new SmartnewsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
