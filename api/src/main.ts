import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
      .setTitle('Cats example')
      .setDescription('The cats API description')
      .setVersion('1.0')
      .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, swaggerDocument);

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);

}
bootstrap();
