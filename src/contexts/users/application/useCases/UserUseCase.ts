import { injectable } from 'inversify';

import { IUserUseCase } from '../../domain/interfaces/IUserUseCase';

@injectable()
export class UserUseCase implements IUserUseCase {}
