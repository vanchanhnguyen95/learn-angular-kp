import { Bt1HeaderModule } from './bt1-header.module';

describe('Bt1HeaderModule', () => {
  let bt1HeaderModule: Bt1HeaderModule;

  beforeEach(() => {
    bt1HeaderModule = new Bt1HeaderModule();
  });

  it('should create an instance', () => {
    expect(bt1HeaderModule).toBeTruthy();
  });
});
