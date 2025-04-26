import { Test, TestingModule } from '@nestjs/testing';
import { TipoAtivoService } from './tipo-ativo.service';

describe('TipoAtivoService', () => {
  let service: TipoAtivoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoAtivoService],
    }).compile();

    service = module.get<TipoAtivoService>(TipoAtivoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
