import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FontAwesomeModule,
  IconDefinition,
} from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { IAuthService } from '../../../../services/auth/auth-service.interface';
import { UserInformation } from '../../../../models/auth/user-information.model';
import { ServicesModule } from '../../../../services/services.module';
import { AUTH_SERVICE } from '../../../../constants/injection.constant';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FontAwesomeModule, RouterModule, ServicesModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  //#region Font Awesome Icons
  public faBars: IconDefinition = faBars;

  //#endregion
  public isShowProfileDropdown: boolean = false;
  public isShowMainMenu: boolean = false;

  public isAuthenticated: boolean = false;
  public currentUser: UserInformation | null = null;

  constructor(@Inject(AUTH_SERVICE) private authService: IAuthService) {
    this.authService.isAuthenticated().subscribe((res) => {
      this.isAuthenticated = res;
    });

    this.authService.getUserInformation().subscribe((res) => {
      if (res) {
        this.currentUser = res;
      }
    });

    // this.authService.getUserInformationFromAccessToken().subscribe((res) => {
    //   console.log(res);
    // });
  }

  public logout(): void {
    this.authService.logout();
  }
}
