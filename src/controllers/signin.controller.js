import * as allSignup from "../repositories/signup.repository.js";
import * as allSessions from "../repositories/sessions.repository.js";
import { v4 as uuid } from "uuid";


async function postSigninController(req, res) {
  const { email } = req.body;
  const token = uuid();
  const consult = await allSignup.getConsultSignupRepository({ email });
  const userId = consult.rows[0].id;

  try {
    await allSessions.postSessionRepository({ userId, token });
    return res.status(200).send({ token });
  } catch (error) {
    return res.sendStatus(500).send(error);
  }
}

export { postSigninController };