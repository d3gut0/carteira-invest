import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from './config/ormconfig';
// importar módulos
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AtivosModule } from './modules/ativos/ativos.module';
import { CarteirasModule } from './modules/carteiras/carteiras.module';
import { MovimentacoesModule } from './modules/movimentacoes/movimentacoes.module';
import { TipoAtivoModule } from './modules/tipo-ativo/tipo-ativo.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { CotacoesModule } from './modules/cotacoes/cotacoes.module';
// ... outros módulos

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: ormConfig,
      inject: [ConfigService],
    }),
    UsuariosModule,
    TipoAtivoModule,
    AtivosModule,
    CarteirasModule,
    MovimentacoesModule,
    CotacoesModule,
  ],
  controllers: [AppController],   
  providers:   [AppService], 
})
export class AppModule {}
