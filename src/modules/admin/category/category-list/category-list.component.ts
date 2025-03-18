import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { CategoryModel } from '../../../../models/category/category.model';
import { ICategoryService } from '../../../../services/category/category-service.interface';
import { ServicesModule } from '../../../../services/services.module';
import {
  FontAwesomeModule,
  IconDefinition,
} from '@fortawesome/angular-fontawesome';
import { CategoryDetailComponent } from '../category-detail/category-detail.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TableComponent } from '../../../../core/components/table/table.component';
import { TableColumn } from '../../../../core/models/table/table-column.model';
import { MasterDataListComponent } from '../../master-data/master-data.component';

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
export class CategoryListComponent
  extends MasterDataListComponent<CategoryModel>
  implements OnInit
{
  public override columns: TableColumn[] = [
    { name: 'Name', value: 'name' },
    { name: 'Description', value: 'description' },
  ];

  constructor(
    @Inject('ICategoryService') private categoryService: ICategoryService
  ) {
    super();
  }

  protected override createForm(): void {
    this.searchForm = new FormGroup({
      keyword: new FormControl(''),
    });
  }

  protected override searchData(): void {
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
}
