// ativo.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ObjectLiteral, Repository } from 'typeorm';

import { Ativo } from './ativo.entity';
import { AtivosService } from './ativos.service';

/**
 * Tipagem genérica para um repositório “mockado”
 * – cada método vira um jest.Mock, mas só os que você precisar.
 */
type MockRepository<T extends ObjectLiteral = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

/** Factory que devolve um repositório simulado já com os métodos mais usados */
const createMockRepository = (): MockRepository => ({
  create: jest.fn(),
  save:   jest.fn(),
  findOne: jest.fn(),
  find:   jest.fn(),
});

describe('AtivosService', () => {
  let service: AtivosService;
  let repo: MockRepository<Ativo>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AtivosService,
        {
          provide: getRepositoryToken(Ativo),
          useValue: createMockRepository(),
        },
      ],
    }).compile();

    service = module.get<AtivosService>(AtivosService);
    repo    = module.get<MockRepository<Ativo>>(getRepositoryToken(Ativo));
  });

  it('should create an ativo', async () => {
    const dto = { codigo: 'ABC', nome: 'Teste', tipoAtivoId: 1 };

    // prepara o comportamento do stub
    repo.create!.mockReturnValue(dto);                 // o "!" garante ao TS que existe
    repo.save!.mockResolvedValue({ id: 1, ...dto });

    await expect(service.create(dto)).resolves.toEqual({ id: 1, ...dto });
  });
});
