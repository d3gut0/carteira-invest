import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ativo } from '../ativos/ativo.entity';

@Entity('COTACAO')
export class Cotacao {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @ManyToOne(() => Ativo, ativo => ativo.cotacoes, { nullable: false })
  @JoinColumn({ name: 'ATIVO_ID' })
  ativo: Ativo;

  @Column({ name: 'DATA', type: 'date' })
  data: Date;

  @Column({
    name: 'PRECO_ABERTURA',
    type: 'number',
    precision: 18,
    scale: 6,
  })
  precoAbertura: number;

  @Column({
    name: 'PRECO_MAXIMO',
    type: 'number',
    precision: 18,
    scale: 6,
  })
  precoMaximo: number;

  @Column({
    name: 'PRECO_MINIMO',
    type: 'number',
    precision: 18,
    scale: 6,
  })
  precoMinimo: number;

  @Column({
    name: 'PRECO_FECHAMENTO',
    type: 'number',
    precision: 18,
    scale: 6,
  })
  precoFechamento: number;

  @Column({
    name: 'VOLUME',
    type: 'number',
    precision: 18,
    scale: 2,
  })
  volume: number;
}
