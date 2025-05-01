// src/tipo-ativo/tipo-ativo.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoAtivo } from './tipo-ativo.entity';
import { TipoAtivoService } from './tipo-ativo.service';

@Module({
  imports: [TypeOrmModule.forFeature([TipoAtivo])],
  providers: [TipoAtivoService],
  exports: [TipoAtivoService],     // caso outros módulos precisem usar o service
})
export class TipoAtivoModule {}
