import { BaseEntity } from '../../../../shared/constants/BaseEntity';

export class Restaurant extends BaseEntity {
  readonly name!: string;
  readonly nit!: string;
  readonly ownerId!: string;
  readonly categoryId!: string;
  readonly address!: string;
  readonly city!: string;
  readonly department!: string;
  readonly phone!: string;
  readonly email?: string;
  readonly capacity!: number;
  readonly picture!: string;
  readonly description!: string;
}
