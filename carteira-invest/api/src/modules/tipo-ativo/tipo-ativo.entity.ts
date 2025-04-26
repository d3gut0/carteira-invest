import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TIPO_ATIVO')
export class TipoAtivo {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'NOME', length: 50 })
  nome: string;

  @Column({ name: 'DESCRICAO', length: 200, nullable: true })
  descricao?: string;
}