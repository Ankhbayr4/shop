import { sql } from "../../database";

export const getRecord = async (_request, response) => {
  const records = await sql`SELECT * FROM users`;

  response.status(200).json({
    records: records,
  });
};
