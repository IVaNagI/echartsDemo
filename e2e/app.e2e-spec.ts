import { EchartsDemoPage } from './app.po';

describe('echarts-demo App', () => {
  let page: EchartsDemoPage;

  beforeEach(() => {
    page = new EchartsDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
