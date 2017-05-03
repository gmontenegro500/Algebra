import { ElearningWebsitePage } from './app.po';

describe('elearning-website App', () => {
  let page: ElearningWebsitePage;

  beforeEach(() => {
    page = new ElearningWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
