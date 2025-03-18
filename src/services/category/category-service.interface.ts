import { CategoryModel } from '../../models/category/category.model';
import { IMasterDataService } from '../master-data/master-data-service.interface';

export interface ICategoryService extends IMasterDataService<CategoryModel> {}
