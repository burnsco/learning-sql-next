import * as db from '../../scripts/db.js';

export async function fetchCities() {
  try {
    const allQuery = `
          SELECT name, country, population, area, population / area AS density
          FROM cities
          WHERE country = 'China'
          ORDER BY population DESC
          LIMIT 5
          `;
    const indiaAndChinaTop5AreaDesc = `
          SELECT name, country, population, area, population / area AS density
          FROM cities
          WHERE country IN ('China', 'India')
          AND name LIKE 'C%'
          OR name LIKE 'B%'
          ORDER BY population DESC
          LIMIT 5
          `;
    const minMax = `
          SELECT name, country, population, area, population / area AS density
          FROM cities
          `;

    const chinaOrderByArea = `
          SELECT name, country, population, area, population / area AS density
          FROM cities
          WHERE country IN ('China') ORDER BY area ASC`;

    const { rows } = await db.query(minMax);
    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch cities data.');
  }
}

export async function fetchCitiesCount() {
  try {
    const allQuery = `
                  SELECT COUNT(DISTINCT country)
                  FROM cities
                `;
    const { rows } = await db.query(allQuery);
    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch cities data.');
  }
}

export async function fetchPopulationSum() {
  try {
    const allQuery = `
                  SELECT SUM(population)
                  FROM cities
                `;
    const { rows } = await db.query(allQuery);
    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch cities data.');
  }
}

export async function fetchAreaSum() {
  try {
    const allQuery = `
                  SELECT SUM(area)
                  FROM cities
                `;
    const { rows } = await db.query(allQuery);
    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch cities data.');
  }
}

export async function fetchDensitySum() {
  try {
    const allQuery = `
                  SELECT SUM(population / area)
                  FROM cities
                `;
    const { rows } = await db.query(allQuery);
    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch cities data.');
  }
}
