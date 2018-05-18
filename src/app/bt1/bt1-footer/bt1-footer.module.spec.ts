import { Bt1FooterModule } from './bt1-footer.module';

describe('Bt1FooterModule', () => {
  let bt1FooterModule: Bt1FooterModule;

  beforeEach(() => {
    bt1FooterModule = new Bt1FooterModule();
  });

  it('should create an instance', () => {
    expect(bt1FooterModule).toBeTruthy();
  });
});
