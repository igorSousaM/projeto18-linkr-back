import connection from "../database/db.js";


 function postSignupRepository({ name, email, password, photo }) {
  const result = connection.query(
    `
      INSERT INTO users ( 
        name, 
        email,
        password,
        photo  
      )  
      VALUES 
        ($1, $2, $3, $4)
   `,
    [name, email, password, photo]
  );
  return result;
}
export { postSignupRepository };