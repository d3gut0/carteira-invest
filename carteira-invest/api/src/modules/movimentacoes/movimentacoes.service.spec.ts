import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ObjectLiteral, Repository } from 'typeorm';

import { TipoMovimentacao } from './dtos/create-movimentacoes.dto';
import { Movimentacao } from './movimentacao.entity';
import { MovimentacoesService } from './movimentacoes.service';

type MockRepo<T extends ObjectLiteral = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

const createMockRepo = (): MockRepo => ({
  create: jest.fn(),
  save:   jest.fn(),
  find:   jest.fn(),
  findOne: jest.fn(),
});

describe('MovimentacoesService', () => {
  let service: MovimentacoesService;
  let repo: MockRepo<Movimentacao>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MovimentacoesService,
        { provide: getRepositoryToken(Movimentacao), useValue: createMockRepo() },
      ],
    }).compile();

    service = module.get(MovimentacoesService);
    repo    = module.get(getRepositoryToken(Movimentacao));
  });

  it('create() deve registrar uma movimentação', async () => {
    const dto = { carteiraId: 1, ativoId: 1, tipo: TipoMovimentacao.COMPRA, quantidade:3, precoUnitario: 10 , dataMovimentacao: '2025-01-01'};

    repo.create!.mockReturnValue(dto);
    repo.save!.mockResolvedValue({ id: 1, ...dto });

    await expect(service.create(dto)).resolves.toEqual({ id: 1, ...dto });
  });
});
