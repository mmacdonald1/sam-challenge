import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {config} from '../orm.config';
import { PlantsModule } from './plants/plants.module';
import { SeedModule } from './seed/seed.module';
@Module({
  imports: [TypeOrmModule.forRoot(config), PlantsModule, SeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
