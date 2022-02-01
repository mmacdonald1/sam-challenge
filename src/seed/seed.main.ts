import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { SeedModule } from './seed.module';
import { SeedService } from './seed.service';

async function bootstrap() {
  NestFactory.createApplicationContext(SeedModule)
    .then(appContext => {
      const logger = appContext.get(Logger);
      const seedService = appContext.get(SeedService);
      seedService
        .seed()
        .then(() => {
          logger.debug('Seeding complete!');
        })
        .catch(error => {
          logger.error('Seeding failed!');
        })
        .finally(() => appContext.close());
    })
    .catch(error => console.log('seed main err: ', error));
}
bootstrap();
