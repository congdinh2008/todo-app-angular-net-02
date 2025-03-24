import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IAuthService } from '../../../services/auth/auth-service.interface';
import { AUTH_SERVICE } from '../../../constants/injection.constant';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    @Inject(AUTH_SERVICE) private authService: IAuthService,
    private router: Router
  ) {
    this.authService.isAuthenticated().subscribe((res) => {
      if (res) {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm() {
    this.form = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
    });
  }

  public onSubmit(): void {
    this.authService.login(this.form.value).subscribe((response) => {
      if (response) {
        // Redirect to home page
        this.router.navigate(['/']);
      }
    });
  }
}
