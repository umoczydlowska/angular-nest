import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class Task extends Model {
  @PrimaryKey
  @Column
  id: string;

  @Column
  title: string;

  @Column({ defaultValue: false })
  completed: boolean;
}
