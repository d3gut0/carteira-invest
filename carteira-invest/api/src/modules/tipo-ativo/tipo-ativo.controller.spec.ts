import { Test, TestingModule } from '@nestjs/testing';
import { TipoAtivoController } from './tipo-ativo.controller';

describe('TipoAtivoController', () => {
  let controller: TipoAtivoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoAtivoController],
    }).compile();

    controller = module.get<TipoAtivoController>(TipoAtivoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
