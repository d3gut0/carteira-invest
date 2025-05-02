import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ObjectLiteral, Repository } from 'typeorm';


import { Cotacao } from './cotacao.entity';
import { CotacoesService } from './cotacoes.service';

type MockRepo<T extends ObjectLiteral = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

const createMockRepo = (): MockRepo => ({
  create: jest.fn(),
  save:   jest.fn(),
  find:   jest.fn(),
  findOne: jest.fn(),
});

describe('CotacoesService', () => {
  let service: CotacoesService;
  let repo: MockRepo<Cotacao>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CotacoesService,
        { provide: getRepositoryToken(Cotacao), useValue: createMockRepo() },
      ],
    }).compile();

    service = module.get(CotacoesService);
    repo    = module.get(getRepositoryToken(Cotacao));
  });

  it('create() deve gravar uma cotação', async () => {
    const dto = { ativoId: 1, precoFechamento: 10, data:'',
      precoAbertura:0,
      precoMaximo:0,
      precoMinimo:0,
      volume:0};

    repo.create!.mockReturnValue(dto);
    repo.save!.mockResolvedValue({ id: 1, ...dto });

    await expect(service.create(dto)).resolves.toEqual({ id: 1, ...dto });
  });
});

