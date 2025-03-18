import { Injectable } from '@angular/core';
import { ISupplierService } from './supplier-service.interface';
import { SupplierModel } from '../../models/supplier/supplier.model';
import { HttpClient } from '@angular/common/http';
import { MasterDataService } from '../master-data/master-data.service';

@Injectable({
  providedIn: 'root',
})
export class SupplierService
  extends MasterDataService<SupplierModel>
  implements ISupplierService
{
  constructor(protected override httpClient: HttpClient) {
    super(httpClient, 'suppliers');
  }
}
