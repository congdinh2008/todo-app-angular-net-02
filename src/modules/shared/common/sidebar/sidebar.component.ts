import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight, faDashboard, faGear, faList, faUser, faUserShield } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  imports: [FontAwesomeModule, CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  //#region Font Awesome Icons
  public faDashboard: IconDefinition = faDashboard;
  public faList: IconDefinition = faList;
  public faGear: IconDefinition = faGear;
  public faAngleDoubleLeft: IconDefinition = faAngleDoubleLeft;
  public faAngleDoubleRight: IconDefinition = faAngleDoubleRight;
  public faUser: IconDefinition = faUser;
  public faUserShield: IconDefinition = faUserShield;

  //#endregion
  public isShowSidebar: boolean = false;
}
