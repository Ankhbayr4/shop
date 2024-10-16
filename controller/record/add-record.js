import { sql } from "../../database";

export const addRecord = async (request, response) => {
  const { userid, categoryid, name, amount, type, description } = request.body;

  try {
    await sql`INSERT INTO records (userid ,categoryid ,name , amount,type, description )
            VALUES (${userid},${categoryid},${name},${amount},${type} ,${description})`;

    response.status(200).json({ addRecord: request.body });
  } catch (error) {
    response.status(400).json({ message: "aldaa garlaa" });
  }
};
