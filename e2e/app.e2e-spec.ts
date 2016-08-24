import { ElbilAdminpanelPage } from './app.po';

describe('elbil-adminpanel App', function() {
  let page: ElbilAdminpanelPage;

  beforeEach(() => {
    page = new ElbilAdminpanelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
