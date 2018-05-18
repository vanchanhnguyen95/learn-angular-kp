import { Lai1ItemModule } from './lai1-item.module';

describe('Lai1ItemModule', () => {
  let lai1ItemModule: Lai1ItemModule;

  beforeEach(() => {
    lai1ItemModule = new Lai1ItemModule();
  });

  it('should create an instance', () => {
    expect(lai1ItemModule).toBeTruthy();
  });
});
