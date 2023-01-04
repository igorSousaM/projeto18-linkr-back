import bcrypt from "bcrypt";
import * as allSignup from "../repositories/signup.repository.js";
import * as allSessions from "../repositories/sessions.repository.js";
async function postSignupController(req, res) {
  let { name, email, password, photo } = req.body;
  password = bcrypt.hashSync(req.body.password, 10);
  try {
    await allSignup.postSignupRepository({
      name,
      email,
      password,
      photo,
    });
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500).send(error);
  }
}
 
async function getSignupController(req, res) {

  let { authorization } = req.headers;

  const token = authorization?.replace("Bearer ", "");
   
  const consultSessions = await allSessions.consultSessionRepository({ token });
     
  const userId = consultSessions.rows[0].userId;
  try { 
    const consult = await allSessions.getConsultSessionRepository({ userId });
    return res.send(consult.rows[0]);
  } catch (error) {
    return res.sendStatus(500).send(error);
  }
}

export { postSignupController, getSignupController };
