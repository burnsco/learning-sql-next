import { faker } from '@faker-js/faker';
const bcrypt = require('bcrypt');

// Faker User Schema
export function createRandomUser() {
  return {
    id: faker.string.uuid(),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    avatar: faker.image.avatar(),
    last_login: faker.date.past(),
  };
}

// Faker User Generation Function
export const USER = faker.helpers.multiple(createRandomUser, {
  count: 1,
});

export let testUser = USER.flatMap((u) => {
  return [
    u.id,
    u.email,
    u.username,
    u.password,
    u.birthdate,
    u.avatar,
    u.last_login,
  ];
});
