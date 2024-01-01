import { pool } from '../db.js';

export async function CreateUsersTable() {
  const db = await pool.connect();

  try {
    await db.query('BEGIN');
    const CREATE_USER_TABLE = `CREATE TABLE IF NOT EXISTS users (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                email TEXT NOT NULL UNIQUE,
                username VARCHAR(50) NOT NULL UNIQUE,
                password TEXT NOT NULL,
                birthdate DATE NOT NULL,
                avatar TEXT NOT NULL,
                created_at TIMESTAMP NOT NULL DEFAULT
              CURRENT_TIMESTAMP,
                last_login TIMESTAMP
              );
      `;
    const res = await db.query(CREATE_USER_TABLE);
    await db.query('COMMIT');
  } catch (err) {
    await db.query('ROLLBACK');
    console.error(err);
  } finally {
    db.release(true);
  }
}

CreateUsersTable();
