import express from 'express';
import cors from 'cors';

import router from './routes';

class App {
  constructor() {
    this.server = express();

    this.midleware();
    this.cors();
    this.routes();
  }

  cors() {
    this.server.use(cors());
  }

  midleware() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(router);
  }
}

export default new App().server;
