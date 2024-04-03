import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { FooModule } from './foo/foo.module';
import { BarModule } from './bar/bar.module';

@Module({
  imports: [AuthModule, FooModule, BarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
