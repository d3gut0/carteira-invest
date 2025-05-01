// cotacao.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import {
    IsDateString,
    IsNotEmpty,
    IsNumber,
    Min,
} from 'class-validator';
  
  export class CreateCotacaoDto {
    @IsNumber()
    @Type(() => Number)
    @IsNotEmpty()
    ativoId!: number;              // FK → ATIVO
  
    @IsDateString()
    data!: string;                 // YYYY-MM-DD ou ISO completo
  
    @IsNumber()
    @Type(() => Number)
    precoAbertura!: number;
  
    @IsNumber()
    @Type(() => Number)
    precoMaximo!: number;
  
    @IsNumber()
    @Type(() => Number)
    precoMinimo!: number;
  
    @IsNumber()
    @Type(() => Number)
    precoFechamento!: number;
  
    @IsNumber()
    @Type(() => Number)
    @Min(0)
    volume!: number;
  }
  
  export class UpdateCotacaoDto extends PartialType(CreateCotacaoDto) {}
  