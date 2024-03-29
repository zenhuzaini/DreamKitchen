import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { createSwaggerDocument } from './swagger/swagger.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  SwaggerModule.setup('api/v1', app, createSwaggerDocument(app));
  await app.listen(3009);
}
bootstrap();
