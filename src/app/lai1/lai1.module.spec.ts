import { Lai1Module } from './lai1.module';

describe('Lai1Module', () => {
  let lai1Module: Lai1Module;

  beforeEach(() => {
    lai1Module = new Lai1Module();
  });

  it('should create an instance', () => {
    expect(lai1Module).toBeTruthy();
  });
});
