import connection from "../database/db.js";

export async function getPostsByHashtag(req,res){

    try{
    const postsQuery = await connection.query(`SELECT posts.id, posts."userId", posts.text, posts.link FROM posts
     INNER JOIN hashtags ON posts.id = hashtags."postId"
     WHERE hashtags.name = $1`,[req.params.hashtag])
    const posts = postsQuery.rows;
    res.send(posts)
    }catch(err){console.log(err);res.sendstatus(500)}

}

export async function getTrending(req,res){
    try{
        const hashtags = await connection.query(` SELECT name, COUNT(*) FROM hashtags GROUP BY name ORDER BY COUNT(*) DESC LIMIT 10;`)
        console.log(hashtags.rows)
        res.send(hashtags.rows)
    }catch(err){console.log(err);res.sendstatus(500)}
}