import { pool } from '../db.js';
import { testUser } from './fake-users.js';

export async function InsertUsers() {
  const db = await pool.connect();

  testUser[3] = await Bun.password.hash(testUser[3]);

  try {
    await db.query('BEGIN');

    const text = `INSERT INTO users(id, email, username, password, birthdate, avatar, last_login) VALUES ($1, $2, $3, $4, $5, $6, $7)`;

    const res = await db.query(text, testUser);
    await db.query('COMMIT');
  } catch (err) {
    await db.query('ROLLBACK');
    console.error(err);
  } finally {
    db.release();
  }
}

InsertUsers();
