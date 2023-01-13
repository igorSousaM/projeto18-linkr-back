import connection from "../database/db.js";

async function postPostsController(req, res) {
  const userId = res.locals.userId;
  const { text, link } = req.body;

  try {
    await connection.query(
      'INSERT INTO posts ("userId", text, link) VALUES ($1,$2,$3);',
      [userId, text, link]
    );

    const post = await connection.query(
      `SELECT * FROM posts WHERE "userId" = $1 AND "text" = $2 AND "link" = $3;`,
      [userId, text, link]
    );
    const postId = post.rows[0].id;

    console.log(postId);

    const hashtags = [];
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) === "#") {
        const stopIndex = text.indexOf(" ", i);
        if (stopIndex !== -1) hashtags.push(text.substring(i + 1, stopIndex));
      }
    }

    console.log(hashtags);

    hashtags.map(async (e) => {
      await connection.query(
        `INSERT INTO hashtags (name, "postId") VALUES ($1, $2)`,
        [e, postId]
      );
    });

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
      `SELECT p.id, p."userId", p.text, p.link, COUNT(l.*) AS "likeCount"  FROM posts 
      AS p LEFT JOIN likes AS l 
      ON p.id = l."postId" GROUP BY p.id ORDER BY p."createdAt" DESC LIMIT 20 ;`
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
    res.status(200).send("post alterado");
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
