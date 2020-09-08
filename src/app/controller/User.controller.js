import * as yup from 'yup';
import User from '../models/User';

class UserController {
  async store(request, response) {
    // start verify schema
    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().required(),
      password: yup.string().required(),
      provider: yup.boolean().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ Status: 'Error, validation fails' });
    }

    // verify user exisist
    const userExists = await User.findOne({
      where: { email: request.body.email.toLowerCase() },
    });

    if (userExists) {
      return response.status(400).json({ Error: 'User already exists' });
    }

    // create user
    const { name, email, password_hash, provider } = await User.create(
      request.body
    );

    return response.json({ name, email, password_hash, provider });
  }
}

export default new UserController();
