import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupplierDetailComponent } from './supplier-detail.component';
import { SUPPLIER_SERVICE } from '../../../../constants/injection.constant';
import { MockSupplierService } from '../../../../testing/mock-services';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SupplierDetailComponent', () => {
  let component: SupplierDetailComponent;
  let fixture: ComponentFixture<SupplierDetailComponent>;
  let mockSupplierService: MockSupplierService;

  beforeEach(async () => {
    mockSupplierService = new MockSupplierService();
    
    await TestBed.configureTestingModule({
      imports: [
        SupplierDetailComponent,
        ReactiveFormsModule,
        CommonModule,
        FontAwesomeModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: SUPPLIER_SERVICE, useValue: mockSupplierService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SupplierDetailComponent);
    component = fixture.componentInstance;
    component.selectedItem = {
      id: '1',
      name: 'Test Supplier',
      description: 'Test Description',
      isActive: true,
      isDelete: false,
      createdAt: new Date(),
      createdBy: 'Test User'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
