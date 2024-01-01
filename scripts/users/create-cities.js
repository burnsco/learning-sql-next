import { pool } from '../db.js';

// So for the course I'm taking I scraped wikipedia most populated cities
// with the data -> city, country, population and area
//
export async function CreateCitiesTable() {
  const db = await pool.connect();

  try {
    await db.query('BEGIN');
    const CREATE_CITIES_TABLE = `CREATE TABLE IF NOT EXISTS cities (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(50) NOT NULL UNIQUE,
                country VARCHAR(50) NOT NULL,
                population INTEGER NOT NULL,
                area INTEGER NOT NULL
              );
      `;
    const res = await db.query(CREATE_CITIES_TABLE);
    await db.query('COMMIT');
  } catch (err) {
    await db.query('ROLLBACK');
    console.error(err);
  } finally {
    db.release(true);
  }
}

CreateCitiesTable();
