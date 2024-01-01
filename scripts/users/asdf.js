const pg = require('pg');
const format = require('pg-format');
const pool = new pg.Pool(); // replace with your actual pool configuration

let users = [
  { username: 'user1', email: 'user1@example.com' },
  { username: 'user2', email: 'user2@example.com' },
  // add more users as needed
];

let usersValues = users.map((user) => [user.username, user.email]);

let queryText = format(
  'INSERT INTO users (username, email) VALUES %L',
  usersValues,
);

pool.query(queryText, (err, res) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Inserted data:', res);
});
