import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppSecondController } from './app-second.controller';

@Module({
  imports: [],
  controllers: [AppController, AppSecondController],
  providers: [AppService],
})
export class AppModule {}
