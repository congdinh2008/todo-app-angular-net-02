import { Inject, Injectable } from '@angular/core';
import { AUTH_SERVICE } from '../../constants/injection.constant';
import { IAuthService } from '../auth/auth-service.interface';
import { Router } from '@angular/router';
import { IPermissionService } from './permission-service.interface';

@Injectable({
  providedIn: 'root',
})
export class PermissionService implements IPermissionService {
  constructor(
    @Inject(AUTH_SERVICE) private authService: IAuthService,
    private router: Router
  ) {}

  isUnauthenticated(): boolean {
    // Neu user da dang nhap => redirect ve trang chu
    this.authService.isAuthenticated().subscribe((res) => {
      if (res) {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    });
    // Neu user chua dang nhap => cho phep truy cap
    return true;
  }

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/auth/login']);
    return false;
  }
}
