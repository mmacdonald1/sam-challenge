import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedService } from './seed.service';
import { PostgresModule } from '../services/postgres/postgres.module';
import { PostgresConfig } from 'src/services/postgres/postgres.config';
import { PlantSeedModule } from './plants/plants.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [PostgresModule],
      useExisting: PostgresConfig,
    }),
    PlantSeedModule,
  ],
  providers: [SeedService, Logger],
})
export class SeedModule {}
