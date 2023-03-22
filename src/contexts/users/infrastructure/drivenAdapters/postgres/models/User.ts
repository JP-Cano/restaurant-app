import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { DocumentType } from '../../../../../../shared/enums/documentTypes/DocumentType';
import { Rol } from '../../../../../../shared/enums/roles/Rol';

@Entity('users')
export class User {
  @CreateDateColumn()
  readonly createdAt!: Date;

  @UpdateDateColumn()
  readonly updatedAt!: Date;

  @PrimaryGeneratedColumn('uuid')
  readonly Id!: string;

  @Column()
  readonly name!: string;

  @Column()
  readonly lastName!: string;

  @Column()
  readonly document!: string;

  @Column({
    type: 'enum',
    enum: DocumentType,
  })
  readonly documentType!: DocumentType;

  @Column()
  readonly Dob!: Date;

  @Column({
    type: 'enum',
    enum: Rol,
    default: Rol.USER,
  })
  readonly rol!: Rol;

  @Column()
  readonly email!: string;

  @Column()
  readonly password!: string;

  @Column()
  readonly isActive!: boolean;

  @Column()
  readonly cellphone?: string;

  @Column()
  readonly picture?: string;
}
