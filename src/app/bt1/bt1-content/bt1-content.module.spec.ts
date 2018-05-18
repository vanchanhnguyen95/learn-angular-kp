import { Bt1ContentModule } from './bt1-content.module';

describe('Bt1ContentModule', () => {
  let bt1ContentModule: Bt1ContentModule;

  beforeEach(() => {
    bt1ContentModule = new Bt1ContentModule();
  });

  it('should create an instance', () => {
    expect(bt1ContentModule).toBeTruthy();
  });
});
