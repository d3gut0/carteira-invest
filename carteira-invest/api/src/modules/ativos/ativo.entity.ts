import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cotacao } from '../cotacoes/cotacao.entity';
import { Movimentacao } from '../movimentacoes/movimentacao.entity';
import { TipoAtivo } from '../tipo-ativo/tipo-ativo.entity';

@Entity('ATIVO')
export class Ativo {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'CODIGO', length: 20 })
  codigo: string;

  @Column({ name: 'NOME', length: 100 })
  nome: string;

  @ManyToOne(() => TipoAtivo)
  @JoinColumn({ name: 'TIPO_ATIVO_ID' })
  tipoAtivo: TipoAtivo;

  @Column({ name: 'MERCADO', length: 50, nullable: true })
  mercado?: string;

  @OneToMany(() => Movimentacao, (mov) => mov.ativo)
  movimentacoes: Movimentacao[];

  @OneToMany(() => Cotacao, (cot) => cot.ativo)
  cotacoes: Cotacao[];
}
