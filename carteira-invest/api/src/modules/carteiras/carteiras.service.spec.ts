import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ObjectLiteral, Repository } from 'typeorm';

import { Carteira } from './carteira.entity';
import { CarteirasService } from './carteiras.service';

type MockRepo<T extends ObjectLiteral = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;
const createMockRepo = (): MockRepo => ({
  create: jest.fn(),
  save:   jest.fn(),
  find:   jest.fn(),
  findOne: jest.fn(),
});

describe('CarteirasService', () => {
  let service: CarteirasService;
  let repo: MockRepo<Carteira>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CarteirasService,
        { provide: getRepositoryToken(Carteira), useValue: createMockRepo() },
      ],
    }).compile();

    service = module.get(CarteirasService);
    repo    = module.get(getRepositoryToken(Carteira));
  });

  it('create() deve gravar uma carteira', async () => {
    const dto = { nome: 'Principal', usuarioId: 1 };

    repo.create!.mockReturnValue(dto);
    repo.save!.mockResolvedValue({ id: 1, ...dto });

    await expect(service.create(dto)).resolves.toEqual({ id: 1, ...dto });
  });

  it('findAll() deve retornar lista', async () => {
    const lista = [{ id: 1, nome: 'Principal' }];
    repo.find!.mockResolvedValue(lista);

    await expect(service.findAll()).resolves.toEqual(lista);
  });
});
