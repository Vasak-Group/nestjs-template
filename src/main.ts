import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import compression from '@fastify/compress';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );
  const config = new DocumentBuilder()
    .setTitle('nestjs-template Example')
    .setDescription('The nestjs-template API description')
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  app.register(compression, { encodings: ['gzip', 'deflate'] });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors();

  SwaggerModule.setup('docs', app, document);
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
