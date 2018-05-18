import { BtFormModule } from './bt-form.module';

describe('BtFormModule', () => {
  let btFormModule: BtFormModule;

  beforeEach(() => {
    btFormModule = new BtFormModule();
  });

  it('should create an instance', () => {
    expect(btFormModule).toBeTruthy();
  });
});
