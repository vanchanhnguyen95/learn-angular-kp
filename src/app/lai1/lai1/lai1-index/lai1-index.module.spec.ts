import { Lai1IndexModule } from './lai1-index.module';

describe('Lai1IndexModule', () => {
  let lai1IndexModule: Lai1IndexModule;

  beforeEach(() => {
    lai1IndexModule = new Lai1IndexModule();
  });

  it('should create an instance', () => {
    expect(lai1IndexModule).toBeTruthy();
  });
});
