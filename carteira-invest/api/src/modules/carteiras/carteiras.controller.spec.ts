import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';

import { CarteirasController } from './carteiras.controller';
import { CarteirasService } from './carteiras.service';

const carteirasServiceMock = {
  findAll: jest.fn(),
  create : jest.fn(),
};

describe('CarteirasController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [CarteirasController],
      providers:   [{ provide: CarteirasService, useValue: carteirasServiceMock }],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => app.close());

  it('GET /carteiras retorna []', async () => {
    carteirasServiceMock.findAll.mockResolvedValueOnce([]);
    await request(app.getHttpServer()).get('/carteiras').expect(200).expect([]);
  });
});
