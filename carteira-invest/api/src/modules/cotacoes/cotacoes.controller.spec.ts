// import { Test, TestingModule } from '@nestjs/testing';
// import { CotacoesController } from './cotacoes.controller';

// describe('CotacoesController', () => {
//   let controller: CotacoesController;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [CotacoesController],
//     }).compile();

//     controller = module.get<CotacoesController>(CotacoesController);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });
// });


// ativos.e2e-spec.ts
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import * as request from 'supertest'; // ⬅️  supertest

describe('CotacoesController (e2e)', () => {
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

  it('/cotacoes (GET)', () => {
    return request(app.getHttpServer())
      .get('/cotacoes')
      .expect(200)
      .expect([]);     // ajuste o corpo esperado conforme seu controller
  });
});
