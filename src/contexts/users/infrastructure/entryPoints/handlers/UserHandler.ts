import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';

import { IUserUseCase } from '../../../domain/interfaces/IUserUseCase';

@injectable()
export class UserHandler {
  constructor(@inject('IUserUseCase') _userUseCase: IUserUseCase) {
    // Only for DI
  }

  public getAllUser(_req: Request, res: Response): Response {
    return res.json('Working');
  }
}
