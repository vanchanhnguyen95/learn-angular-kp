import { OneWayBinDingModule } from './one-way-bin-ding.module';

describe('OneWayBinDingModule', () => {
  let oneWayBinDingModule: OneWayBinDingModule;

  beforeEach(() => {
    oneWayBinDingModule = new OneWayBinDingModule();
  });

  it('should create an instance', () => {
    expect(oneWayBinDingModule).toBeTruthy();
  });
});
