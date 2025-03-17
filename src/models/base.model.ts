export class BaseModel {
  public id!: string;
  public createdBy!: Date;
  public createdAt!: string;
  public updatedAt!: Date;
  public updatedBy!: string;
  public deletedAt!: Date;
  public deletedBy!: Date;
  public isDelete!: boolean;
}
