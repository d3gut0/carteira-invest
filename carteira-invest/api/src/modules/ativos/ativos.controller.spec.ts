// ativos.e2e-spec.ts
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import * as request from 'supertest'; // ⬅️  supertest

describe('AtivosController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close(); // fecha a aplicação quando o teste acabar
  });

  it('/ativos (GET)', () => {
    return request(app.getHttpServer())
      .get('/ativos')
      .expect(200)
      .expect([]);     // ajuste o corpo esperado conforme seu controller
  });
});
