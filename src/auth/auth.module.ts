import { Global, Module } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth/auth.service';

@Global()
@Module({
  providers: [AuthGuard, AuthService],
  exports: [AuthGuard, AuthService],
})
export class AuthModule {}
