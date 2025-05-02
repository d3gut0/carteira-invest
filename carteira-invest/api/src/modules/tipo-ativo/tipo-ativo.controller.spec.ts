// import { Test, TestingModule } from '@nestjs/testing';
// import { TipoAtivoController } from './tipo-ativo.controller';

// describe('TipoAtivoController', () => {
//   let controller: TipoAtivoController;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [TipoAtivoController],
//     }).compile();

//     controller = module.get<TipoAtivoController>(TipoAtivoController);
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

describe('TipoAtivoController (e2e)', () => {
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

  it('/tipo-ativos (GET)', () => {
    return request(app.getHttpServer())
      .get('/tipo-ativos')
      .expect(200)
      .expect([]);     // ajuste o corpo esperado conforme seu controller
  });
});
