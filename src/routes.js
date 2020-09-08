import { Router } from 'express';

// controllers
import User from './app/controller/User.controller';

const router = new Router();

router.get('/', (request, response) => {
  return response.json({ status: 'is running' });
});

router.post('/users', User.store);

export default router;
