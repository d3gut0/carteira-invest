// example: create-Usuario.dto.ts
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  nome: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  hashSenha: string;

  
}
