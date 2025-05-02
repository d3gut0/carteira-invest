// import { Test, TestingModule } from '@nestjs/testing';
// import { CarteirasController } from './carteiras.controller';

// describe('CarteirasController', () => {
//   let controller: CarteirasController;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [CarteirasController],
//     }).compile();

//     controller = module.get<CarteirasController>(CarteirasController);
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

describe('CarteirasController (e2e)', () => {
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

  it('/carteiras (GET)', () => {
    return request(app.getHttpServer())
      .get('/carteiras')
      .expect(200)
      .expect([]);     // ajuste o corpo esperado conforme seu controller
  });
});
