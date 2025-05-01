// example: create-Usuario.dto.ts
import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  nome: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  descricao: string;

  @IsNumber()
  usuario: number;

  
}
