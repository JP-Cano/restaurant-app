import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('dishes')
export class Dish {
  @CreateDateColumn()
  readonly createdAt!: Date;

  @UpdateDateColumn()
  readonly updatedAt!: Date;

  @PrimaryGeneratedColumn('uuid')
  readonly Id!: string;

  @Column()
  readonly categoryId!: string;

  @Column()
  readonly restaurantId!: string;

  @Column()
  readonly name!: string;

  @Column()
  readonly price!: number;

  @Column()
  readonly description!: string;

  @Column()
  readonly isActive!: boolean;

  @Column()
  readonly picture!: string;
}
