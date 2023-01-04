import * as allSignup from "../repositories/signup.repository.js";
import bcrypt from "bcrypt";

async function postSigninMiddlewares(req, res, next) {
  let { email, password } = req.body;
  const consult = await allSignup.getConsultSignupRepository({ email });

  if (
    consult.rows.length === 0 ||
    !bcrypt.compareSync(password, consult.rows[0].password)
  ) {
    return res.sendStatus(401);
  }

  next();
}
export { postSigninMiddlewares };
