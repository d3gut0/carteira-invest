import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dtos/create-usuario.dto';
import { UpdateUsuarioDto } from './dtos/update-usuario.dto';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private UsuarioRepo: Repository<Usuario>,
  ) {}

  async create(dto: CreateUsuarioDto): Promise<Usuario> {
    const Usuario = this.UsuarioRepo.create(dto);
    return this.UsuarioRepo.save(Usuario);
  }

  async findAll(): Promise<Usuario[]> {
    return this.UsuarioRepo.find({ relations: ['tipoUsuario'] });
  }

  async findOne(id: number): Promise<Usuario> {
    // return this.UsuarioRepo.findOneOrFail(id, { relations: ['tipoUsuario'] });
    return this.UsuarioRepo.findOneOrFail({
      where: { id },
      relations: ['tipoUsuario'],
    });
  }

  async update(id: number, dto: UpdateUsuarioDto): Promise<Usuario> {
    await this.UsuarioRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.UsuarioRepo.delete(id);
  }
}