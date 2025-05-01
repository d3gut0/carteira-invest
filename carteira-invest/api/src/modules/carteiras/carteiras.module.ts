import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carteira } from './carteira.entity';
import { CarteirasController } from './carteiras.controller';
import { CarteirasService } from './carteiras.service';

@Module({
  imports: [TypeOrmModule.forFeature([Carteira])],
  providers: [CarteirasService],
  controllers: [CarteirasController]
})
export class CarteirasModule {}
