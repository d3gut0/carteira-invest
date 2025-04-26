// src/config/ormconfig.ts
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default (config: ConfigService): TypeOrmModuleOptions => ({
  type: 'oracle',
  username: config.get<string>('ORACLE_USER'),
  password: config.get<string>('ORACLE_PASS'),
  // monta host:porta/ServiceName
  connectString: `${config.get<string>('ORACLE_HOST')}:` +
                 `${config.get<string>('ORACLE_PORT')}/` +
                 `${config.get<string>('ORACLE_SERVICE_NAME')}`,
  synchronize: false,        // em produção use migrations
  logging: true,
  entities: [__dirname + '/../modules/**/*.entity.{ts,js}'],
});
