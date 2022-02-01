import { Module } from '@nestjs/common';
import { PostgresConfig } from './postgres.config';

@Module({
  providers: [PostgresConfig],
  exports: [PostgresConfig],
})
export class PostgresModule {}
