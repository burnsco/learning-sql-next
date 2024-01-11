'use server';

import { revalidatePath } from 'next/cache';
import { query } from '../../scripts/db.js';

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
          SELECT id, name, country, population, area, population / area AS density
          FROM cities
          ORDER BY population DESC
          `;

    const chinaOrderByArea = `
          SELECT name, country, population, area, population / area AS density
          FROM cities
          WHERE country IN ('China') ORDER BY area ASC`;

    const { rows } = await query(minMax);
    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch cities data.');
  }
}

export async function fetchCitiesCount() {
  try {
    const allQuery = `
                  SELECT COUNT(country)
                  FROM cities
                `;
    const { rows } = await query(allQuery);
    return rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch cities data.');
  }
}

export async function deleteCity(name: string) {
  try {
    const allQuery = `
                  DELETE FROM cities
                  WHERE name = $1
                `;
    const test = await query(allQuery, [`${name}`]);
    revalidatePath('/');
    return test;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch cities data.');
  }
}

export async function deleteCities() {
  try {
    const allQuery = `
                  DELETE FROM cities
                  WHERE country = 'China'
                `;
    const test = await query(allQuery);
    return test;
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
    const { rows } = await query(allQuery);
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
    const { rows } = await query(allQuery);
    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch cities data.');
  }
}

export async function fetchFilteredCities(searchQuery: string) {
  try {
    const nameOrCountry = `
                  SELECT name, country, population, area, population / area AS density
                  FROM cities
                  WHERE name LIKE $1
    `;
    const { rows } = await query(nameOrCountry, [`%${searchQuery}%`]);
    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch cities data.');
  }
}

export async function fetchUpdateMexicoCity() {
  try {
    const allQuery = `
                  UPDATE cities
                  SET population = 21804000
                  WHERE name = 'Mexico City'
                `;
    const { rows } = await query(allQuery);
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
    const { rows } = await query(allQuery);
    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch cities data.');
  }
}
