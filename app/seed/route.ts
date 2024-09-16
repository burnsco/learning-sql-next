import { getClient } from '../../scripts/db.js';

// So for the course I'm taking I scraped wikipedia most populated cities
// with the data -> city, country, population and area
//
export async function CreateCitiesTable() {
	const db = await getClient();

	try {
		await db.query('BEGIN');
		const CREATE_UUID_EXTENSION = `
            CREATE EXTENSION IF NOT EXISTS
            "uuid-ossp";
            `;

		const CREATE_CITIES_TABLE = `CREATE TABLE IF NOT EXISTS cities (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(50) NOT NULL UNIQUE,
                country VARCHAR(50) NOT NULL,
                population INTEGER NOT NULL,
                area INTEGER NOT NULL
              );
      `;
		// await db.query(CREATE_UUID_EXTENSION);
		await db.query(CREATE_CITIES_TABLE);
		await db.query('COMMIT');
	} catch (err) {
		await db.query('ROLLBACK');
		console.error(err);
	} finally {
		db.release();
	}
}

export async function GET() {
	await CreateCitiesTable()
}
