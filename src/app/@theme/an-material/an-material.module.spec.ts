import { AnMaterialModule } from './an-material.module';

describe('AnMaterialModule', () => {
  let anMaterialModule: AnMaterialModule;

  beforeEach(() => {
    anMaterialModule = new AnMaterialModule();
  });

  it('should create an instance', () => {
    expect(anMaterialModule).toBeTruthy();
  });
});
