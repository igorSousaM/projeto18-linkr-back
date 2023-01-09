import connection from "../database/db.js";

async function postPostsController(req, res) {
  const userId = res.locals.userId;
  const { text, link } = req.body;

  try {
    await connection.query(
      'INSERT INTO posts ("userId", text, link) VALUES ($1,$2,$3);',
      [userId, text, link]
    );
    res.send("deu bom, olha o console!").status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

async function deletePostsController(req, res) {
  const { id } = req.params;

  try {
    await connection.query("DELETE FROM posts WHERE id = $1;", [id]);
    res.status(200).send("deletado com sucasso!");
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

async function getPosts(req, res) {
  try {
    const posts = await connection.query(
      'SELECT * FROM posts ORDER BY "createdAt" DESC LIMIT 20 ;'
    );
    res.send(posts.rows).status(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

async function updatePostsController(req, res) {
  const { id } = req.params;
  const { text, link } = req.body;

  try {
    await connection.query("UPDATE posts SET text=$1, link=$2 WHERE id = $3;", [
      text,
      link,
      id,
    ]);
    res.status(200).send("post alterado")
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export {
  postPostsController,
  getPosts,
  updatePostsController,
  deletePostsController,
};
