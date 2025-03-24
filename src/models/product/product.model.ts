import { MasterBaseModel } from "../master-base.model";

export class ProductModel extends MasterBaseModel {
  public name!: string;
  public description!: string;
  public price!: number;
  public unitInStock!: number;
  public thumbnail!: string;
  public isDiscontinued!: boolean;
  public categoryId!: string;
  public categoryName!: string;
  public supplierId!: string;
  public supplierName!: string;
}
