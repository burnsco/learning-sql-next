import format from 'pg-format';
import { pool } from '../db.js';
import { tenUsers } from './fake-users.js';

export async function InsertUsers() {
  const db = await pool.connect();

  let users1Values = tenUsers.map((user) => [
    user.id,
    user.email,
    user.username,
    user.password,
    user.birthdate,
    user.avatar,
    user.last_login,
  ]);

  console.log(users1Values);

  try {
    await db.query('BEGIN');

    let usersValues = tenUsers.map((user) => [
      user.id,
      user.email,
      user.username,
      user.password,
      user.birthdate,
      user.avatar,
      user.last_login,
    ]);

    const text2 = format(
      `INSERT INTO users(id, email, username, password, birthdate, avatar, last_login) VALUES %L`,
      usersValues,
    );

    const text = `INSERT INTO users(id, email, username, password, birthdate, avatar, last_login) VALUES ($1, $2, $3, $4, $5, $6, $7)`;

    const res = await db.query(text2);
    await db.query('COMMIT');
    console.log('Inserted Data:', res);
  } catch (err) {
    await db.query('ROLLBACK');
    console.error(err);
  }
  db.release();
}

InsertUsers();
