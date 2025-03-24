import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryDetailComponent } from './category-detail.component';
import { CATEGORY_SERVICE } from '../../../../constants/injection.constant';
import { MockCategoryService } from '../../../../testing/mock-services';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CategoryDetailComponent', () => {
  let component: CategoryDetailComponent;
  let fixture: ComponentFixture<CategoryDetailComponent>;
  let mockCategoryService: MockCategoryService;

  beforeEach(async () => {
    mockCategoryService = new MockCategoryService();
    
    await TestBed.configureTestingModule({
      imports: [
        CategoryDetailComponent,
        ReactiveFormsModule,
        CommonModule,
        FontAwesomeModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: CATEGORY_SERVICE, useValue: mockCategoryService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryDetailComponent);
    component = fixture.componentInstance;
    component.selectedItem = { 
      id: '1', 
      name: 'Test Category', 
      description: 'Test Description',
      isActive: true,
      createdBy: 'Test User',
      createdAt: new Date(),
      isDelete: false
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
