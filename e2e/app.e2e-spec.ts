import { Angular2MoviesSearchPage } from './app.po';

describe('angular2-movies-search App', () => {
  let page: Angular2MoviesSearchPage;

  beforeEach(() => {
    page = new Angular2MoviesSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
