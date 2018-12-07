import { MatsMusicPage } from './app.po';

describe('mats-music App', () => {
  let page: MatsMusicPage;

  beforeEach(() => {
    page = new MatsMusicPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
