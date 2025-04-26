// // src/config/ormconfig.ts
// import { ConfigService } from '@nestjs/config';
// import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

// export default (config: ConfigService): TypeOrmModuleOptions => ({
//   type: 'oracle',
//   username: config.get<string>('ORACLE_USER'),
//   password: config.get<string>('ORACLE_PASS'),
//   // monta host:porta/ServiceName
//   connectString: `${config.get<string>('ORACLE_HOST')}:` +
//                  `${config.get<string>('ORACLE_PORT')}/` +
//                  `${config.get<string>('ORACLE_SERVICE_NAME')}`,
//   synchronize: false,        // em produção use migrations
//   logging: true,
//   entities: [__dirname + '/../modules/**/*.entity.{ts,js}'],
// });
export default (config: ConfigService): TypeOrmModuleOptions => {
  const host = config.get<string>('ORACLE_HOST');
  const port = config.get<string>('ORACLE_PORT');
  const svc  = config.get<string>('ORACLE_SERVICE_NAME');
  const user = config.get<string>('ORACLE_USER');
  const pass = config.get<string>('ORACLE_PASS');

  // console.log('🔍 ORACLE CONFIG →', { host, port, svc, user, pass });
  
  return {
    type: 'oracle',
    username: user,
    password: pass,
    connectString: `${host}:${port}/${svc}`,
    synchronize: false,
    logging: true,
    entities: [__dirname + '/../modules/**/*.entity.{ts,js}'],
  };
};
