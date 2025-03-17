import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FontAwesomeModule,
  IconDefinition
} from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  //#region Font Awesome Icons
  public faBars: IconDefinition = faBars;

  //#endregion
  public isShowProfileDropdown: boolean = false;
  public isShowMainMenu: boolean = false;
}
