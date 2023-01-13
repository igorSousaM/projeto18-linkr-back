import connection from "../database/db.js";

async function postCommentController(req, res) {
  const { userId } = res.locals;
  const { id } = req.params;
  const { text } = req.body;

  try {
    await connection.query(
      'INSERT INTO comments (text,"userId","postId") VALUES ($1,$2,$3);',
      [text, userId, id]
    );
    res.status(201).send("comentario inserido");
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export { postCommentController };
