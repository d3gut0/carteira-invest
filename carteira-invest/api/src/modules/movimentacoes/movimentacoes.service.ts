import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovimentacoesDto } from './dtos/create-movimentacoes.dto';
import { UpdateMovimentacoesDto } from './dtos/update-movimentacoes.dto';
import { Movimentacao } from './movimentacao.entity';

@Injectable()
export class MovimentacoesService {
  constructor(
    @InjectRepository(Movimentacao)
    private MovimentacoesRepo: Repository<Movimentacao>,
  ) {}

  async create(dto: CreateMovimentacoesDto): Promise<Movimentacao> {
    const Movimentacoes = this.MovimentacoesRepo.create(dto);
    return this.MovimentacoesRepo.save(Movimentacoes);
  }

  async findAll(): Promise<Movimentacao[]> {
    return this.MovimentacoesRepo.find({ relations: ['tipoMovimentacoes'] });
  }

  async findOne(id: number): Promise<Movimentacao> {
    return this.MovimentacoesRepo.findOneOrFail({
      where: { id },
      relations: ['tipoMovimentacoes'],
    });
  }

  async update(id: number, dto: UpdateMovimentacoesDto): Promise<Movimentacao> {
    await this.MovimentacoesRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.MovimentacoesRepo.delete(id);
  }
}