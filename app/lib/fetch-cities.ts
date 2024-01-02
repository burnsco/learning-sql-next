import * as db from '../../scripts/db.js';

export async function fetchCities() {
  try {
    const textQuery = `
    SELECT name, country, population, area, population / area AS density FROM cities`;
    const data = await db.query(textQuery);
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch cities data.');
  }
}
