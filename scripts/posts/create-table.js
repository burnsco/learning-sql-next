import { pool } from '../db.js';

export async function CreatePostsTable() {
  const db = await pool.connect();

  try {
    await db.query('BEGIN');
    const CREATE_POSTS_TABLE = `CREATE TABLE IF NOT EXISTS posts (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                title VARCHAR(255) NOT NULL UNIQUE,
                content TEXT NOT NULL UNIQUE,
                created_at TIMESTAMP NOT NULL DEFAULT
                CURRENT_TIMESTAMP,
              );
      `;
    const res = await db.query(CREATE_POSTS_TABLE);
    await db.query('COMMIT');
  } catch (err) {
    await db.query('ROLLBACK');
    console.error(err);
  } finally {
    db.release(true);
  }
}

CreatePostsTable();
