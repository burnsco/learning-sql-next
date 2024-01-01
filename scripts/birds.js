import { pool } from './db.js';
import { BIRDS } from './faker.js';

(async () => {
  const db = await pool.connect();

  for (let i = 0; i < BIRDS.length; i++) {
    try {
      await db.query('BEGIN');
      const insertBirdTexy = `INSERT INTO birds(type) VALUES($1) RETURNING type`;
      const insertBirdValues = [BIRDS[i]];

      const res = await db.query(insertBirdTexy, insertBirdValues);
      await db.query('COMMIT');
    } catch (err) {
      await db.query('ROLLBACK');
      console.error(err);
    }
  }
  db.release();
})();
