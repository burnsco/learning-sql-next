import { sql } from '@vercel/postgres';

export default async function Home() {
  // const data = await scrape();

  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  // Create the "users" table if it doesn't exist
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-semibold text-red-500">Lets go</h1>
      <p>What else can you say?</p>
      <div>
        <li>testing testing 1 2 3</li>
      </div>
      <p>Hello this is a paragraph</p>
    </main>
  );
}
