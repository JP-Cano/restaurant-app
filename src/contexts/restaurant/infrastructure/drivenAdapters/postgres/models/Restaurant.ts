import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('restaurants')
export class Restaurant {
  @CreateDateColumn()
  readonly createdAt!: Date;

  @UpdateDateColumn()
  readonly updatedAt!: Date;

  @PrimaryGeneratedColumn('uuid')
  readonly Id!: string;

  @Column()
  readonly name!: string;

  @Column()
  readonly nit!: string;

  @Column()
  readonly ownerId!: string;

  @Column()
  readonly categoryId!: string;

  @Column()
  readonly address!: string;

  @Column()
  readonly city!: string;

  @Column()
  readonly department!: string;

  @Column()
  readonly phone!: string;

  @Column()
  readonly email!: string;

  @Column()
  readonly capacity!: number;

  @Column()
  readonly picture!: string;

  @Column()
  readonly description!: string;
}
