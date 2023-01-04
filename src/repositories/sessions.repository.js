import connection from "../database/db.js";

async function postSessionRepository({ userId, token }) {
  console.log({ userId, token });
  const result = await connection.query(
    ` 
      INSERT INTO sessions ( 
        "userId", 
        token
      ) 
      VALUES 
        ($1, $2)
   `,
    [userId, token]
  );
  return result;
}
export { postSessionRepository };
