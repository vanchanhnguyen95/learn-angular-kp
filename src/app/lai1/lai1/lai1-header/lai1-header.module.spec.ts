import { Lai1HeaderModule } from './lai1-header.module';

describe('Lai1HeaderModule', () => {
  let lai1HeaderModule: Lai1HeaderModule;

  beforeEach(() => {
    lai1HeaderModule = new Lai1HeaderModule();
  });

  it('should create an instance', () => {
    expect(lai1HeaderModule).toBeTruthy();
  });
});
