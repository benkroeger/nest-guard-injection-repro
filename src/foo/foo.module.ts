import { Module } from '@nestjs/common';
import { FooController } from './foo/foo.controller';

@Module({
  controllers: [FooController]
})
export class FooModule {}
