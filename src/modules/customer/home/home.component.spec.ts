import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { PRODUCT_SERVICE } from '../../../constants/injection.constant';
import { MockProductService } from '../../../testing/mock-services';
import { CommonModule } from '@angular/common';
import { ProductOverviewComponent } from '../../shared/common/components/product-overview/product-overview.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockProductService: MockProductService;

  beforeEach(async () => {
    mockProductService = new MockProductService();
    
    await TestBed.configureTestingModule({
      imports: [
        HomeComponent,
        CommonModule,
        ProductOverviewComponent,
        HttpClientTestingModule
      ],
      providers: [
        { provide: PRODUCT_SERVICE, useValue: mockProductService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
