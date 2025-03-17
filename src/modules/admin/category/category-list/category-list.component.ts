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
  faEdit,
  faPlus,
  faRotate,
  faSearch,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { CategoryDetailComponent } from '../category-detail/category-detail.component';
import { OrderDirection, SearchModel } from '../../../../models/search.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-list',
  imports: [
    CommonModule,
    ServicesModule,
    FontAwesomeModule,
    CategoryDetailComponent,
    ReactiveFormsModule,
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

  //#endregion

  public isShowDetail: boolean = false;
  public selectedItem!: CategoryModel | undefined | null;
  public filter: SearchModel = {
    keyword: '',
    pageNumber: 1,
    pageSize: 10,
    orderBy: 'name',
    orderDirection: OrderDirection.ASC,
    includeInactive: false,
  };

  public searchForm!: FormGroup;

  public categories: CategoryModel[] = [];

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
    this.categoryService.search(this.filter).subscribe((data) => {
      this.categories = data.items;
      console.log(data);
      
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
      this.selectedItem = this.categories.find((x) => x.id === id);
      this.isShowDetail = true;
    }, 150);
  }

  public create(): void {
    this.isShowDetail = false;
    setTimeout(() => {
      this.selectedItem = null;
      this.isShowDetail = true;
    }, 150);
  }

  public onSubmit(): void {
    // Gan gia tri tu form vao filter => Keyword
    Object.assign(this.filter, this.searchForm.value);
    this.searchData();
  }
}
