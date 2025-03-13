import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../common/header/header.component';
import { SidebarComponent } from '../../common/sidebar/sidebar.component';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css',
})
export class AdminLayoutComponent {}
