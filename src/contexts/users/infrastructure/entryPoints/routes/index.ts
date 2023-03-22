import { Router } from 'express';

import { container } from '../../../../../shared/dependency-injection/Config';
import { UserHandler } from '../handlers/UserHandler';

const router: Router = Router();
const userController = container.get<UserHandler>(UserHandler);

router.get('/', userController.getAllUser);
