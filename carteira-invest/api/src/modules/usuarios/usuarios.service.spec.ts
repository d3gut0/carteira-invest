import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ObjectLiteral, Repository } from 'typeorm';

import { Usuario } from './usuario.entity';
import { UsuariosService } from './usuarios.service';

type MockRepo<T extends ObjectLiteral = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

const createMockRepo = (): MockRepo => ({
  create: jest.fn(),
  save:   jest.fn(),
  find:   jest.fn(),
  findOne: jest.fn(),
});

describe('UsuariosService', () => {
  let service: UsuariosService;
  let repo: MockRepo<Usuario>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsuariosService,
        { provide: getRepositoryToken(Usuario), useValue: createMockRepo() },
      ],
    }).compile();

    service = module.get(UsuariosService);
    repo    = module.get(getRepositoryToken(Usuario));
  });

  it('create() deve gravar um usuário', async () => {
    const dto = { nome: 'Denisson', email: 'denisson@example.com', hashSenha: 'hash...' };

    repo.create!.mockReturnValue(dto);
    repo.save!.mockResolvedValue({ id: 1, ...dto });

    await expect(service.create(dto)).resolves.toEqual({ id: 1, ...dto });
  });
});
