import { ProductModel } from '../../models/product/product.model';
import { IMasterDataService } from '../master-data/master-data-service.interface';

export interface IProductService extends IMasterDataService<ProductModel> {}
