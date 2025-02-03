import { Column, Table, Model } from 'sequelize-typescript';

@Table({
  tableName: 'product',
})
export class Product extends Model {
  @Column
  title: string;

  @Column
  description: string;

  @Column
  price: string;
}
