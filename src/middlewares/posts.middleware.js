import connection from "../database/db.js";
import * as allSessions from "../repositories/sessions.repository.js";

async function postPostsMiddlewares(req, res, next) {
  const { authorization } = req.headers;

  const token = authorization?.replace("Bearer ", "");

  try {
    const consultSession = await allSessions.consultSessionRepository({
      token,
    });

    if (consultSession.rows.length === 0) {
      return res.status(401).send("token nao existe");
    }

    const userId = consultSession.rows[0].userId;
    res.locals.data = { ...req.body, userId };
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }

  next();
}

async function deletePostsMiddlewares(req, res, next) {
  const {id} = req.params
  const { authorization } = req.headers;

  const token = authorization?.replace("Bearer ", "");

  try {
    const consultSession = await allSessions.consultSessionRepository({
      token,
    });

    if (consultSession.rows.length === 0) {
      return res.status(401).send("token nao existe");
    }

    const userId = consultSession.rows[0].userId;

    const consultPost = await connection.query('SELECT * FROM posts WHERE id=$1;', [id]);
    if(consultPost.rows.length === 0){
      return res.status(404).send('Post não existe');
    };

    if(consultPost.rows[0].userId !== userId){
      return res.status(401).send('Você não pode deletar esse post');
    };

  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  };

  next();
};

export { postPostsMiddlewares, deletePostsMiddlewares };
