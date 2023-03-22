import { Container } from 'inversify';

import { UserUseCase } from '../../contexts/users/application/useCases/UserUseCase';
import { IUserUseCase } from '../../contexts/users/domain/interfaces/IUserUseCase';
import { UserHandler } from '../../contexts/users/infrastructure/entryPoints/handlers/UserHandler';

export const container = new Container();

container.bind<IUserUseCase>('IUserUseCase').to(UserUseCase).inRequestScope();
container.bind<UserHandler>(UserHandler).toSelf().inRequestScope();
