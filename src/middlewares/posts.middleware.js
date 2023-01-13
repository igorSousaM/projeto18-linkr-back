import connection from "../database/db.js";

async function postValidation(req, res, next) {
  const { id } = req.params;

  try {
    const consultPost = await connection.query(
      "SELECT * FROM posts WHERE id=$1;",
      [id]
    );
    if (consultPost.rows.length === 0) {
      return res.status(404).send("Post não existe");
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }

  next();
}

export { postValidation };
