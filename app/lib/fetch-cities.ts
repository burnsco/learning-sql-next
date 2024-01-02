import * as db from '../../scripts/db.js';

type Cities = {
  id: string;
  name: string;
  population: number;
  area: number;
}[];

export async function fetchCities() {
  try {
    const data = await db.query(`SELECT * FROM cities`);
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch cities data.');
  }
}
