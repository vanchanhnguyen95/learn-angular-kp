import { StructModule } from './struct.module';

describe('StructModule', () => {
  let structModule: StructModule;

  beforeEach(() => {
    structModule = new StructModule();
  });

  it('should create an instance', () => {
    expect(structModule).toBeTruthy();
  });
});
