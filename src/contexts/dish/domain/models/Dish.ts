import { BaseEntity } from '../../../../shared/constants/BaseEntity';

export class Dish extends BaseEntity {
  readonly restaurantId!: string;
  readonly categoryId!: string;
  readonly name!: string;
  readonly price!: number;
  readonly description!: string;
  readonly isActive!: boolean;
  readonly picture!: string;
}
