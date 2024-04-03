import { Module } from '@nestjs/common';
import { FooController } from './foo/foo.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [FooController],
})
export class FooModule {}
