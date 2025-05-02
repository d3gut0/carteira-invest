import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ObjectLiteral, Repository } from 'typeorm';

import { TipoAtivo } from './tipo-ativo.entity';
import { TipoAtivoService } from './tipo-ativo.service';

type MockRepo<T extends ObjectLiteral = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

const createMockRepo = (): MockRepo => ({
  create: jest.fn(),
  save:   jest.fn(),
  find:   jest.fn(),
  findOne: jest.fn(),
});

describe('TipoAtivoService', () => {
  let service: TipoAtivoService;
  let repo: MockRepo<TipoAtivo>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TipoAtivoService,
        { provide: getRepositoryToken(TipoAtivo), useValue: createMockRepo() },
      ],
    }).compile();

    service = module.get(TipoAtivoService);
    repo    = module.get(getRepositoryToken(TipoAtivo));
  });

  it('create() deve gravar um tipo de ativo', async () => {
    const dto = { descricao: 'Ação',nome: 'Ação' };

    repo.create!.mockReturnValue(dto);
    repo.save!.mockResolvedValue({ id: 1, ...dto });

    await expect(service.create(dto)).resolves.toEqual({ id: 1, ...dto });
  });
});
