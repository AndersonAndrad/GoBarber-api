import { Router } from 'express';

// controllers

const router = new Router();

router.get('/', (request, response) => {
  return response.json({ status: 'is running' });
});

export default router;
