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
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    @Inject(AUTH_SERVICE) private authService: IAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  public createForm() {
    this.form = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(255),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(255),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
        Validators.maxLength(255),
      ]),
      dateOfBirth: new FormControl(new Date()),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
        ),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern(this.form?.get('password')?.value),
      ]),
      address: new FormControl(''),
    });
  }

  public onSubmit(): void {
    this.authService.register(this.form.value).subscribe((response) => {
      if (response) {
        // Redirect to home page
        this.router.navigate(['/']);
      }
    });
  }
}
