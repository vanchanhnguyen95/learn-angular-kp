import { Bt1Module } from './bt1.module';

describe('Bt1Module', () => {
  let bt1Module: Bt1Module;

  beforeEach(() => {
    bt1Module = new Bt1Module();
  });

  it('should create an instance', () => {
    expect(bt1Module).toBeTruthy();
  });
});
