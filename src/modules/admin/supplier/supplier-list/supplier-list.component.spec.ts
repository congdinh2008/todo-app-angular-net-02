import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupplierListComponent } from './supplier-list.component';
import { SUPPLIER_SERVICE } from '../../../../constants/injection.constant';
import { MockSupplierService } from '../../../../testing/mock-services';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SupplierListComponent', () => {
  let component: SupplierListComponent;
  let fixture: ComponentFixture<SupplierListComponent>;
  let mockSupplierService: MockSupplierService;

  beforeEach(async () => {
    mockSupplierService = new MockSupplierService();
    
    await TestBed.configureTestingModule({
      imports: [
        SupplierListComponent,
        ReactiveFormsModule,
        CommonModule,
        FontAwesomeModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: SUPPLIER_SERVICE, useValue: mockSupplierService }
      ],
      schemas: [NO_ERRORS_SCHEMA] // For app-table and other components
    }).compileComponents();

    fixture = TestBed.createComponent(SupplierListComponent);
    component = fixture.componentInstance;
    // Initialize required properties for the component
    component.data = { 
      items: [], 
      totalCount: 0, 
      pageNumber: 1, 
      pageSize: 10, 
      totalPages: 1 
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
