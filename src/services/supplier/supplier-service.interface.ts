import { SupplierModel } from '../../models/supplier/supplier.model';
import { IMasterDataService } from '../master-data/master-data-service.interface';

export interface ISupplierService extends IMasterDataService<SupplierModel> {}
