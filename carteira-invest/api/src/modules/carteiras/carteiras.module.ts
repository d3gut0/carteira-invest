import { Module } from '@nestjs/common';
import { CarteirasService } from './carteiras.service';
import { CarteirasController } from './carteiras.controller';

@Module({
  providers: [CarteirasService],
  controllers: [CarteirasController]
})
export class CarteirasModule {}
