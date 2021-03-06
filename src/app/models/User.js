import Sequelize, { Model } from 'sequelize';
import bycript from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bycript.hash(user.password, 8);
      }
      if (user.name) {
        user.name = user.name.toLowerCase();
      }
      if (user.email) {
        user.email = user.email.toLowerCase();
      }
    });
    return this;
  }
}

export default User;
