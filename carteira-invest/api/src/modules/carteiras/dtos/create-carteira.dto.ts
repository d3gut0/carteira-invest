// carteira.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateCarteiraDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nome!: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  descricao?: string;

  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  usuarioId!: number;            // FK → USUARIO
}

export class UpdateCarteiraDto extends PartialType(CreateCarteiraDto) {}
