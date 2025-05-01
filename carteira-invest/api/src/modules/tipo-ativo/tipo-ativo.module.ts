// src/modules/tipo-ativo/tipo-ativo.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoAtivoController } from './tipo-ativo.controller';
import { TipoAtivo } from './tipo-ativo.entity';
import { TipoAtivoService } from './tipo-ativo.service';

@Module({
  imports: [
    // 🔑 isso registra o repository do entity para injeção
    TypeOrmModule.forFeature([TipoAtivo]),
  ],
  controllers: [TipoAtivoController],
  providers: [TipoAtivoService],
  exports: [TipoAtivoService],   // (opcional) para outros módulos
})
export class TipoAtivoModule {}
