import { BtLayout1HeaderModule } from './bt-layout1-header.module';

describe('BtLayout1HeaderModule', () => {
  let btLayout1HeaderModule: BtLayout1HeaderModule;

  beforeEach(() => {
    btLayout1HeaderModule = new BtLayout1HeaderModule();
  });

  it('should create an instance', () => {
    expect(btLayout1HeaderModule).toBeTruthy();
  });
});
