import { Module } from '@nestjs/common';
import { BarController } from './bar/bar.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [BarController],
})
export class BarModule {}
