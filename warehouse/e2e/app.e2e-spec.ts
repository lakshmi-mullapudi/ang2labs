import { WarehousePage } from './app.po';

describe('warehouse App', () => {
  let page: WarehousePage;

  beforeEach(() => {
    page = new WarehousePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
