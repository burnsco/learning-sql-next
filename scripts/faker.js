import { faker } from '@faker-js/faker';

export function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

export const createRandomBirds = () => faker.animal.bird();

export const BIRDS = faker.helpers.multiple(createRandomBirds, {
  count: 10,
});

export const USER = faker.helpers.multiple(createRandomUser, {
  count: 1,
});

console.log(BIRDS);
