import { Test, TestingModule } from '@nestjs/testing';
import { AtivosController } from './ativos.controller';

describe('AtivosController', () => {
  let controller: AtivosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtivosController],
    }).compile();

    controller = module.get<AtivosController>(AtivosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
