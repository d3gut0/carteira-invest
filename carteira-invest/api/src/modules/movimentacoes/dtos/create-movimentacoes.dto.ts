// movimentacao.dto.ts
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  Min,
} from 'class-validator';
  
  export enum TipoMovimentacao {
    COMPRA = 'COMPRA',
    VENDA  = 'VENDA',
  }
  
  export class CreateMovimentacoesDto {
    @IsNumber()
    @Type(() => Number)
    @IsNotEmpty()
    carteiraId!: number;           // FK → CARTEIRA
  
    @IsNumber()
    @Type(() => Number)
    @IsNotEmpty()
    ativoId!: number;              // FK → ATIVO
  
    @IsEnum(TipoMovimentacao)
    tipo!: TipoMovimentacao;
  
    @IsNumber()
    @Type(() => Number)
    @Min(0.000001)
    quantidade!: number;
  
    @IsNumber()
    @Type(() => Number)
    @Min(0)
    precoUnitario!: number;
  
    @IsDateString()
    dataMovimentacao!: string;     // opcional → torne @IsOptional se quiser
  }
  
  