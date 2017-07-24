import { DairyUiPage } from './app.po';

describe('dairy-ui App', () => {
  let page: DairyUiPage;

  beforeEach(() => {
    page = new DairyUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
