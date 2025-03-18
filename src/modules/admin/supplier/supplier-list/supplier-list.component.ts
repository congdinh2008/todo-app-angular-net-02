import { CommonModule } from '@angular/common';
import {
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { SupplierModel } from '../../../../models/supplier/supplier.model';
import { ISupplierService } from '../../../../services/supplier/supplier-service.interface';
import { ServicesModule } from '../../../../services/services.module';
import {
  FontAwesomeModule,
  IconDefinition,
} from '@fortawesome/angular-fontawesome';
import {
  faPlus,
  faRotate,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { SupplierDetailComponent } from '../supplier-detail/supplier-detail.component';
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
  selector: 'app-supplier-list',
  imports: [
    CommonModule,
    ServicesModule,
    FontAwesomeModule,
    SupplierDetailComponent,
    ReactiveFormsModule,
    FormsModule,
    TableComponent,
  ],
  templateUrl: './supplier-list.component.html',
  styleUrl: './supplier-list.component.css',
})
export class SupplierListComponent implements OnInit {
  //#region Font Awesome icons
  public faPlus: IconDefinition = faPlus;
  public faSearch: IconDefinition = faSearch;
  public faRotate: IconDefinition = faRotate;

  //#endregion

  public isShowDetail: boolean = false;
  public selectedItem!: SupplierModel | undefined | null;
  public filter: SearchModel = {
    keyword: '',
    pageNumber: 1,
    pageSize: 5,
    orderBy: 'name',
    orderDirection: OrderDirection.ASC,
    includeInactive: true,
  };
  public currentPage: number = 1;
  public currentPageSize: number = 5;
  public pageSizeOptions: number[] = [5, 10, 20, 50];

  public searchForm!: FormGroup;

  public data!: PaginatedResult<SupplierModel>;

  public columns: TableColumn[] = [
    { name: 'Name', value: 'name' },
    { name: 'Address', value: 'address' },
    { name: 'Phone Number', value: 'phoneNumber' },
    { name: 'Is Active', value: 'isActive' },
  ];

  constructor(
    @Inject('ISupplierService') private supplierService: ISupplierService
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
    this.supplierService.search(this.filter).subscribe((res) => {
      this.data = res;
    });
  }

  public delete(id: string): void {
    this.supplierService.delete(id).subscribe((data) => {
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
