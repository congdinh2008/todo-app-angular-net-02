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

@Component({
  selector: 'app-category-list',
  imports: [CommonModule, ServicesModule, FontAwesomeModule, CategoryDetailComponent],
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
  public selectedItem?: CategoryModel;

  public categories: CategoryModel[] = [];

  constructor(
    @Inject('ICategoryService') private categoryService: ICategoryService
  ) {}

  ngOnInit(): void {
    console.log('CategoryListComponent');
    this.getData();
  }

  private getData(): void {
    this.categoryService.getAll().subscribe((data) => {
      this.categories = data;
    });
  }

  public delete(id: string): void {
    this.categoryService.delete(id).subscribe((data) => {
      // Neu xoa duoc thi goi lai ham getData de load lai du lieu
      if (data) {
        this.getData();
      }
    });
  }

  public edit(id: string): void {
    this.selectedItem = this.categories.find((x) => x.id === id);

    this.isShowDetail = true;
  }

  public create(): void {
    this.isShowDetail = true;
  }
}
