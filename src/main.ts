import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors({
    origin: ['https://2momentofront.vercel.app'], // ← reemplaza con tu dominio real en Vercel
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: false,
  });

  await app.listen(process.env.PORT || 3000); // Render usará PORT
}
bootstrap();
