import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationsModule } from './notifications/notifications.module';
import * as dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno desde .env

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, // ✅ Usa la variable DATABASE_URL
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV !== 'production', // ⚠️ Solo true en dev
    }),
    NotificationsModule,
  ],
})
export class AppModule {}
