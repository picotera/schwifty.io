import { ReceiverUIPage } from './app.po';

describe('receiver-ui App', function() {
  let page: ReceiverUIPage;

  beforeEach(() => {
    page = new ReceiverUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
