import { Test, TestingModule } from '@nestjs/testing';
import { CotacoesService } from './cotacoes.service';

describe('CotacoesService', () => {
  let service: CotacoesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CotacoesService],
    }).compile();

    service = module.get<CotacoesService>(CotacoesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
