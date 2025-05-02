import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';

import { CotacoesController } from './cotacoes.controller';
import { CotacoesService } from './cotacoes.service';

const cotacoesServiceMock = {
  findAll: jest.fn(),
  create : jest.fn(),
};

describe('CotacoesController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [CotacoesController],
      providers:   [{ provide: CotacoesService, useValue: cotacoesServiceMock }],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => app.close());

  it('GET /cotacoes retorna []', async () => {
    cotacoesServiceMock.findAll.mockResolvedValueOnce([]);
    await request(app.getHttpServer()).get('/cotacoes').expect(200).expect([]);
  });
});
