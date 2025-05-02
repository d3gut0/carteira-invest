import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';

import { TipoAtivoController } from './tipo-ativo.controller';
import { TipoAtivoService } from './tipo-ativo.service';

const tipoAtivoServiceMock = {
  findAll: jest.fn(),
  create : jest.fn(),
};

describe('TipoAtivoController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [TipoAtivoController],
      providers:   [{ provide: TipoAtivoService, useValue: tipoAtivoServiceMock }],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => app.close());

  it('GET /tipo-ativo retorna []', async () => {
    tipoAtivoServiceMock.findAll.mockResolvedValueOnce([]);
    await request(app.getHttpServer()).get('/tipo-ativo').expect(200).expect([]);
  });
});
