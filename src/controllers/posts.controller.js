import connection from "../database/db.js";

async function postPostsController(req, res) {
  const { userId, text, link } = res.locals.data;
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

async function getPosts(req, res){

  try{
    const posts = await connection.query(
      'SELECT * FROM posts ORDER BY "createdAt" DESC LIMIT 20 ;'
    );
    res.send(posts.rows).status(200);
  }catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export { postPostsController, getPosts };