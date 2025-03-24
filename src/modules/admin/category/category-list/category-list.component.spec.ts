import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryListComponent } from './category-list.component';
import { CATEGORY_SERVICE } from '../../../../constants/injection.constant';
import { MockCategoryService } from '../../../../testing/mock-services';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CategoryListComponent', () => {
  let component: CategoryListComponent;
  let fixture: ComponentFixture<CategoryListComponent>;
  let mockCategoryService: MockCategoryService;

  beforeEach(async () => {
    mockCategoryService = new MockCategoryService();
    
    await TestBed.configureTestingModule({
      imports: [
        CategoryListComponent,
        ReactiveFormsModule,
        CommonModule,
        FontAwesomeModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: CATEGORY_SERVICE, useValue: mockCategoryService }
      ],
      schemas: [NO_ERRORS_SCHEMA] // For app-table and other components
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryListComponent);
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
