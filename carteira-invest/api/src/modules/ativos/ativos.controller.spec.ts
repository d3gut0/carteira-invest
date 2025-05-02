import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { AtivosController } from './ativos.controller';
import { AtivosService } from './ativos.service';

const ativosServiceMock = {
  findAll: jest.fn(),
  create : jest.fn(),
  findOne: jest.fn(),
  update : jest.fn(),
  remove : jest.fn(),
};

describe('AtivosController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtivosController],
      providers:   [{ provide: AtivosService, useValue: ativosServiceMock }],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => app.close());

  it('GET /ativos retorna lista vazia', async () => {
    ativosServiceMock.findAll.mockResolvedValueOnce([]);

    await request(app.getHttpServer())
      .get('/ativos')
      .expect(200)
      .expect([]);
  });
});
