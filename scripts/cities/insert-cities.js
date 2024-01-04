import format from 'pg-format';
import { scrape } from '../../app/lib/data.ts';
import { getClient } from '../../scripts/db.js';

export async function InsertCities() {
  const db = await getClient();
  const data = await scrape();

  console.log(data);

  try {
    await db.query('BEGIN');

    const data = await scrape();
    const cityValues = data.flat();

    const queryText = format(
      `INSERT INTO cities(name, country, population, area) VALUES %L`,
      cityValues,
    );

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
