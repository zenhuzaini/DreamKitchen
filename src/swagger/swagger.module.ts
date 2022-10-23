import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder, OpenAPIObject } from '@nestjs/swagger';

export function createSwaggerDocument(app: INestApplication): OpenAPIObject {
  const config = new DocumentBuilder()
    .setTitle('Dream Kitchen')
    .setDescription('The cats API description')
    .setVersion('1.0')
    // .addTag('weather')
    .build();
  return SwaggerModule.createDocument(app, config);
}
