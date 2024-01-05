import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './modules/task/task.module';
import { ConfigModule } from '@nestjs/config';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    
    ConfigModule.forRoot({
        envFilePath:'.env',
        isGlobal:true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
     
    

    TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
