import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTipoAtivoDto } from './dtos/create-tipo-ativo.dto';
import { UpdateTipoAtivoDto } from './dtos/update-tipo-ativo.dto';
import { TipoAtivo } from './tipo-ativo.entity';

@Injectable()
export class TipoAtivoService {
  constructor(
    @InjectRepository(TipoAtivo)
    private repository: Repository<TipoAtivo>,
  ) {}

  async create(dto: CreateTipoAtivoDto): Promise<TipoAtivo> {
    const tipoativo = this.repository.create(dto);
    return this.repository.save(tipoativo);
  }

  async findAll(): Promise<TipoAtivo[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<TipoAtivo> {
    return this.repository.findOneOrFail({
      where: { id },
      relations: ['tipoAtivo'],
    });
  }

  async update(id: number, dto: UpdateTipoAtivoDto): Promise<TipoAtivo> {
    await this.repository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}