import { TestChildPage } from './app.po';

describe('test-child App', () => {
  let page: TestChildPage;

  beforeEach(() => {
    page = new TestChildPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
