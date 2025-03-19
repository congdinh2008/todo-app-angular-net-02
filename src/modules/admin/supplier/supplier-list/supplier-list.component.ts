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
} from '@fortawesome/angular-fontawesome';
import { SupplierDetailComponent } from '../supplier-detail/supplier-detail.component';
import { OrderDirection, SearchModel } from '../../../../models/search.model';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TableComponent } from '../../../../core/components/table/table.component';
import { TableColumn } from '../../../../core/models/table/table-column.model';
import { MasterDataListComponent } from '../../master-data/master-data.component';
import { SUPPLIER_SERVICE } from '../../../../constants/injection.constant';

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
export class SupplierListComponent
  extends MasterDataListComponent<SupplierModel>
  implements OnInit
{
  public override filter: SearchModel = {
    keyword: '',
    pageNumber: 1,
    pageSize: 5,
    orderBy: 'name',
    orderDirection: OrderDirection.ASC,
    includeInactive: true,
  };
  public override columns: TableColumn[] = [
    { name: 'Name', value: 'name' },
    { name: 'Address', value: 'address' },
    { name: 'Phone Number', value: 'phoneNumber' },
    { name: 'Is Active', value: 'isActive' },
  ];

  constructor(
    @Inject(SUPPLIER_SERVICE) private supplierService: ISupplierService
  ) {
    super();
  }

  protected override createForm(): void {
    this.searchForm = new FormGroup({
      keyword: new FormControl(''),
    });
  }

  protected override searchData(): void {
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
}
