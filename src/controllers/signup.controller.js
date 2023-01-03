import bcrypt from "bcrypt";
import * as allSignup from '../repositories/signup.repository.js'

async function postSignupController(req, res) {
  let { name, email, password, photo } = req.body;
  password = bcrypt.hashSync(req.body.password, 10);
  try {
    await allSignup.postSignupRepository({
      name,
      email,
      password,
      photo
    });
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500).send(error);
  }
}

export { postSignupController };
