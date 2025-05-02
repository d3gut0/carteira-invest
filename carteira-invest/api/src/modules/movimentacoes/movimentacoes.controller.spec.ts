import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';

import { MovimentacoesController } from './movimentacoes.controller';
import { MovimentacoesService } from './movimentacoes.service';

const movServiceMock = {
  findAll: jest.fn(),
  create : jest.fn(),
};

describe('MovimentacoesController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [MovimentacoesController],
      providers:   [{ provide: MovimentacoesService, useValue: movServiceMock }],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => app.close());

  it('GET /movimentacoes retorna []', async () => {
    movServiceMock.findAll.mockResolvedValueOnce([]);
    await request(app.getHttpServer()).get('/movimentacoes').expect(200).expect([]);
  });
});
