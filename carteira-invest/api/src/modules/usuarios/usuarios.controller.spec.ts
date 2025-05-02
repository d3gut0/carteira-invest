import { ConflictException, INestApplication, NotFoundException, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';

/** Mock simples do service */
const usuarioServiceMock = {
  findAll: jest.fn(),
  create : jest.fn(),
  findOne: jest.fn(),
  update : jest.fn(),
  remove : jest.fn(),
};

describe('UsuariosController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosController],
      providers:   [
        { provide: UsuariosService, useValue: usuarioServiceMock },
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    
    /* se o controller usa class-validator */
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
    await app.init();
  });

  afterAll(async () => app.close());
  beforeEach(() => jest.clearAllMocks());               // zera mocks entre testes
  /*---------------------------------------------------*/

  /* 1. GET /usuarios — lista vazia */
  it('GET /usuarios deve devolver []', async () => {
    usuarioServiceMock.findAll.mockResolvedValueOnce([]);

    await request(app.getHttpServer())
      .get('/usuarios')
      .expect(200)
      .expect([]);
  });

  /* 2. POST /usuarios — cria usuário com sucesso */
  it('POST /usuarios cria um usuário', async () => {
    const dto = { nome: 'Denisson', email: 'denisson@mail.com', hashSenha: '123456' };
    usuarioServiceMock.create.mockResolvedValueOnce({ id: 1, ...dto });

    await request(app.getHttpServer())
      .post('/usuarios')
      .send(dto)
      .expect(201)
      .expect({ id: 1, ...dto });

    expect(usuarioServiceMock.create).toHaveBeenCalledWith(dto);
  });

  /* 3. POST /usuarios — email duplicado (Conflict 409) */
  it('POST /usuarios retorna 409 se email já existir', async () => {
    const dto = { nome: 'X', email: 'x@mail.com', hashSenha: '123456' };
  
    usuarioServiceMock.create.mockRejectedValueOnce(
      new ConflictException('E-mail já cadastrado'),
    );
  
    await request(app.getHttpServer())
      .post('/usuarios')
      .send(dto)
      .expect(409)
      .expect(res => {
        expect(res.body.message).toContain('E-mail já cadastrado');
      });
  });
  

  /* 4. GET /usuarios/:id — encontrado */
  it('GET /usuarios/1 devolve o usuário', async () => {
    usuarioServiceMock.findOne.mockResolvedValueOnce({ id: 1, nome: 'Denisson' });

    await request(app.getHttpServer())
      .get('/usuarios/1')
      .expect(200)
      .expect({ id: 1, nome: 'Denisson' });
  });

  /* 5. GET /usuarios/:id — não encontrado (404) */
  it('GET /usuarios/99 retorna 404 se não existir', async () => {
    usuarioServiceMock.findOne.mockRejectedValueOnce(
      new NotFoundException('Usuário não encontrado'),
    );

    await request(app.getHttpServer())
      .get('/usuarios/99')
      .expect(404)
      .expect(res => {
        expect(res.body.message).toContain('Usuário não encontrado');
      });
  });

  /* 6. PUT /usuarios/1 — atualização OK */
  it('PUT /usuarios/1 atualiza e devolve o usuário', async () => {
    const dto = { nome: 'Novo Nome' };
    usuarioServiceMock.update.mockResolvedValueOnce({ id: 1, ...dto });

    await request(app.getHttpServer())
      .put('/usuarios/1')
      .send(dto)
      .expect(200)
      .expect({ id: 1, ...dto });
  });

  /* 7. DELETE /usuarios/1 — sucesso (204) */
  it('DELETE /usuarios/1 remove o usuário', async () => {
    usuarioServiceMock.remove.mockResolvedValueOnce(undefined);

    await request(app.getHttpServer())
      .delete('/usuarios/1')
      .expect(200);

    expect(usuarioServiceMock.remove).toHaveBeenCalledWith(1);
  });

  /* 8. POST /usuarios — falha de validação (400) */
  it('POST /usuarios — dto inválido devolve 400', async () => {
    const invalid = { email: 'semNome@mail.com' }; // nome e senha faltantes

    await request(app.getHttpServer())
      .post('/usuarios')
      .send(invalid)
      .expect(400);
  });
});
