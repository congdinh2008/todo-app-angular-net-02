import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLocationDot, faPhone, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  //#region Font Awesome Icons
  public faEnvelope: IconDefinition = faEnvelope;
  public faPhone: IconDefinition = faPhone;
  public faLocationDot: IconDefinition = faLocationDot;

  public year: number = new Date().getFullYear();
}
