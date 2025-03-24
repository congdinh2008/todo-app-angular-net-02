import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerLayoutComponent } from './customer-layout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AUTH_SERVICE } from '../../../../constants/injection.constant';
import { MockAuthService } from '../../../../testing/mock-services';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CustomerLayoutComponent', () => {
  let component: CustomerLayoutComponent;
  let fixture: ComponentFixture<CustomerLayoutComponent>;
  let mockAuthService: MockAuthService;

  beforeEach(async () => {
    mockAuthService = new MockAuthService();
    
    await TestBed.configureTestingModule({
      imports: [
        CustomerLayoutComponent,
        RouterTestingModule,
      ],
      providers: [
        { provide: AUTH_SERVICE, useValue: mockAuthService }
      ],
      schemas: [NO_ERRORS_SCHEMA] // For HeaderComponent and FooterComponent
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
