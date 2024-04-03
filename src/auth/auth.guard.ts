import { type CanActivate, Injectable } from '@nestjs/common';
import { AuthService } from './auth/auth.service';

let cnt = 0;

@Injectable()
export class AuthGuard implements CanActivate {
  private idx: number;
  constructor(private readonly authService: AuthService) {
    this.idx = cnt += 1;
    console.log(`\n\nAuthGuard constructor ${this.idx}\n\n`);
  }

  canActivate(): boolean {
    return true;
  }
}
