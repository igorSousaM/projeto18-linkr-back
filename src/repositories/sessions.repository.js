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

async function consultSessionRepository({ token }) {
 
  const result = await connection.query(
    ` 
      SELECT * FROM sessions WHERE token = '${token}'
   `
  );
  return result;
}

async function getConsultSessionRepository({ userId }) {
  const result = await connection.query(
    ` 
    SELECT
    users.id, users.name, users.email, users.photo FROM sessions
    JOIN users ON sessions."userId" = users.id where "userId" = ${userId};
   `
  );
  return result;
}
export {
  postSessionRepository,
  getConsultSessionRepository,
  consultSessionRepository,
};
