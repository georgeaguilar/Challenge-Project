import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();

  await app.listen(5000);

  logger.log(`Server running in: ${await app.getUrl()}`);
}
bootstrap();
