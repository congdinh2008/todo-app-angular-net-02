import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  Inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CategoryModel } from '../../../../models/category/category.model';
import { ICategoryService } from '../../../../services/category/category-service.interface';
import { ServicesModule } from '../../../../services/services.module';
import {
  FontAwesomeModule,
  IconDefinition,
} from '@fortawesome/angular-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
  faEdit,
  faPlus,
  faRotate,
  faSearch,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { CategoryDetailComponent } from '../category-detail/category-detail.component';
import { OrderDirection, SearchModel } from '../../../../models/search.model';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { PaginatedResult } from '../../../../models/paginated-result.model';
import { TableComponent } from '../../../../core/components/table/table.component';
import { TableColumn } from '../../../../core/models/table/table-column.model';

@Component({
  selector: 'app-category-list',
  imports: [
    CommonModule,
    ServicesModule,
    FontAwesomeModule,
    CategoryDetailComponent,
    ReactiveFormsModule,
    FormsModule,
    TableComponent,
  ],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent implements OnInit {
  //#region Font Awesome icons
  public faEdit: IconDefinition = faEdit;
  public faTrash: IconDefinition = faTrash;
  public faPlus: IconDefinition = faPlus;
  public faSearch: IconDefinition = faSearch;
  public faRotate: IconDefinition = faRotate;
  public faAngleLeft: IconDefinition = faAngleLeft;
  public faAngleDoubleLeft: IconDefinition = faAngleDoubleLeft;
  public faAngleRight: IconDefinition = faAngleRight;
  public faAngleDoubleRight: IconDefinition = faAngleDoubleRight;

  //#endregion

  public isShowDetail: boolean = false;
  public selectedItem!: CategoryModel | undefined | null;
  public filter: SearchModel = {
    keyword: '',
    pageNumber: 1,
    pageSize: 5,
    orderBy: 'name',
    orderDirection: OrderDirection.ASC,
    includeInactive: false,
  };
  public currentPage: number = 1;
  public currentPageSize: number = 5;
  public pageSizeOptions: number[] = [5, 10, 20, 50];

  public searchForm!: FormGroup;

  public data!: PaginatedResult<CategoryModel>;

  public columns: TableColumn[] = [
    { name: 'Name', value: 'name' },
    { name: 'Description', value: 'description' },
  ];

  constructor(
    @Inject('ICategoryService') private categoryService: ICategoryService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.searchData();
  }

  private createForm(): void {
    this.searchForm = new FormGroup({
      keyword: new FormControl(''),
    });
  }

  private searchData(): void {
    this.categoryService.search(this.filter).subscribe((res) => {
      this.data = res;
    });
  }

  public delete(id: string): void {
    this.categoryService.delete(id).subscribe((data) => {
      // Neu xoa duoc thi goi lai ham getData de load lai du lieu
      if (data) {
        this.searchData();
      }
    });
  }

  public edit(id: string): void {
    this.isShowDetail = false;
    setTimeout(() => {
      this.selectedItem = this.data.items.find((x) => x.id === id);
      this.isShowDetail = true;

      // Scroll into view
    }, 150);
  }

  public create(): void {
    this.isShowDetail = false;
    setTimeout(() => {
      this.selectedItem = null;
      this.isShowDetail = true;

      // Scroll into view
    }, 150);
  }

  public onSubmit(): void {
    // Gan gia tri tu form vao filter => Keyword
    Object.assign(this.filter, this.searchForm.value);
    this.searchData();
  }

  public onCloseDetail(): void {
    console.log('Event send from detail');
    this.isShowDetail = false;
    this.searchData();
  }

  public generatePageItems(): number[] {
    if (!this.data) {
      return [];
    }

    const totalPage = this.data.totalPages;
    return Array.from({ length: totalPage }, (_, i) => i + 1);
  }

  public onPageChange(page: number): void {
    this.filter.pageNumber = page;
    if (page < 0 || page > this.data.totalPages || page === this.currentPage) {
      return;
    }

    this.currentPage = page;
    this.searchData();
  }

  public onPageSizeChange(event: any): void {
    this.filter.pageSize = event.target.value;
    this.searchData();
  }
}
