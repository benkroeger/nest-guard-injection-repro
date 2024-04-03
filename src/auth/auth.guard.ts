import { type CanActivate, Injectable } from '@nestjs/common';

let cnt = 0;

@Injectable()
export class AuthGuard implements CanActivate {
  private idx: number;
  constructor() {
    this.idx = cnt += 1;
    console.log(`\n\nAuthGuard constructor ${this.idx}\n\n`);
  }

  canActivate(): boolean {
    return true;
  }
}
