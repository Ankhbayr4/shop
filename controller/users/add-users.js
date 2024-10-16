import { sql } from "../../database";

export const addUser = async (request, response) => {
  const { email, password } = request.body;

  try {
    await sql`INSERT INTO users (email, password)
            VALUES (${email}, ${password} )`;

    response.status(200).json({ addUser: request.body });
  } catch (error) {
    response.status(400).json({ message: "aldaa garlaa" });
  }
};
