import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Plant } from 'src/plants/plant.entity';

@Injectable()
export class PostgresConfig implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: 5432,
      database: process.env.DB_NAME,
      synchronize: true, //false in production
      logging: true,
      entities: [Plant],
    };
  }
}
