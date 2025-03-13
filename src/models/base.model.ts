export class BaseModel {
  public id!: number;
  public createdBy!: Date;
  public createdAt!: string;
  public updatedAt!: Date;
  public updatedBy!: string;
  public deletedAt!: Date;
  public deletedBy!: Date;
  public isDelete!: boolean;
}
