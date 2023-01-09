import connection from "../database/db.js";
import { consultSessionRepository } from "../repositories/sessions.repository.js";

export async function getLikes(req,res){
    const session = await connection.query(` 
    SELECT * FROM sessions WHERE token = $1
 `,[req.headers.authorization.substring(7)]);
    const userId = session.rows[0].userId;
    const likeCount = await connection.query(`SELECT "postId",COUNT(*) FROM likes GROUP BY `)
}
export async function postLikes(req,res){

    const session = await connection.query(` 
    SELECT * FROM sessions WHERE token = $1
 `,[req.headers.authorization.substring(7)])

    const checkLike = await connection.query(` SELECT FROM likes WHERE "postId" = $1 AND "userId" = $2`,[req.body.postId,session.rows[0].userId])


    if (checkLike.rowCount == 1){
        const queryLike = await connection.query(`DELETE FROM likes WHERE "userId" = $1 AND "postId" = $2`,[session.rows[0].userId,req.body.postId])
    }
    else{
        const queryLike = await connection.query(`INSERT INTO likes ("userId","postId") VALUES ($1,$2);`,[session.rows[0].userId,req.body.postId])

    }
    
    
}