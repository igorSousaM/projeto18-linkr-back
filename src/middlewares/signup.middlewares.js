import * as allSignup from "../repositories/signup.repository.js";
async function postSignupMiddlewares(req, res, next) {
  let { email } = req.body;

  const consult = await allSignup.getConsultSignupRepository({ email });
  if (consult.rows.length > 0) return res.sendStatus(409);

  next();
}
export { postSignupMiddlewares };
