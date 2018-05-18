import { Lai1IndexContentModule } from './lai1-index-content.module';

describe('Lai1IndexContentModule', () => {
  let lai1IndexContentModule: Lai1IndexContentModule;

  beforeEach(() => {
    lai1IndexContentModule = new Lai1IndexContentModule();
  });

  it('should create an instance', () => {
    expect(lai1IndexContentModule).toBeTruthy();
  });
});
