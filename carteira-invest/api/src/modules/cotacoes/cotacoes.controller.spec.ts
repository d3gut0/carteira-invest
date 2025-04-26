import { Test, TestingModule } from '@nestjs/testing';
import { CotacoesController } from './cotacoes.controller';

describe('CotacoesController', () => {
  let controller: CotacoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CotacoesController],
    }).compile();

    controller = module.get<CotacoesController>(CotacoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
