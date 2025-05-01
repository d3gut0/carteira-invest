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
    private tipoativoRepo: Repository<TipoAtivo>,
  ) {}

  async create(dto: CreateTipoAtivoDto): Promise<TipoAtivo> {
    const tipoativo = this.tipoativoRepo.create(dto);
    return this.tipoativoRepo.save(tipoativo);
  }

  async findAll(): Promise<TipoAtivo[]> {
    return this.tipoativoRepo.find();
  }

  async findOne(id: number): Promise<TipoAtivo> {
    return this.tipoativoRepo.findOneOrFail({
      where: { id },
      relations: ['tipoAtivo'],
    });
  }

  async update(id: number, dto: UpdateTipoAtivoDto): Promise<TipoAtivo> {
    await this.tipoativoRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tipoativoRepo.delete(id);
  }
}