import { sql } from "../../database";

export const addCategory = async (request, response) => {
  const { name, description } = request.body;

  try {
    await sql`INSERT INTO category (name, description)
            VALUES (${name}, ${description})`;

    response.status(200).json({ addCategory: request.body });
  } catch (error) {
    response.status(400).json({ message: "aldaa garlaa" });
  }
};
