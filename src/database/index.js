import Sequelize from 'sequelize';

// models
import User from '../app/models/User';

// database config
import ConfigDB from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connect = new Sequelize(ConfigDB);

    models.map((Model) => Model.init(this.connect));
  }
}

export default new Database();
