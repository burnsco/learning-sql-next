import format from 'pg-format';
import { getClient } from '../db.js';
import { populatedCities as data } from './pop-cities.js';

export async function InsertCities() {
  const db = await getClient();

  const values = data.map((city) => [
    city.name,
    city.country,
    city.population,
    city.area,
  ]);
  const queryText = format(
    `INSERT INTO cities(name, country, population, area) VALUES %L`,
    values,
  );

  try {
    await db.query('BEGIN');

    const res = await db.query(queryText);
    await db.query('COMMIT');
    console.log('Inserted Data:', res);
  } catch (err) {
    await db.query('ROLLBACK');
    console.error(err);
  }
  db.release();
}

InsertCities();
