import { faker } from '@faker-js/faker';

export const account = [];

export function createRandomUser(){
  return {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    birthday: faker.date.birthdate({mode:'year'}),
    gender: faker.name.gender(1),
    email: faker.internet.email(),
    profile_pic:faker.image.people(), 
  };
}

Array.from({ length: 250000 }).forEach(() => {
  account.push(createRandomUser());
});


let infos = account.map((item,indexedDB) => (+indexedDB, +JSON.stringify(item.first_name), + JSON.stringify(item.last_name), +item.birthday, +JSON.stringify(item.gender[0]) , + JSON.stringify(item.email) , +JSON.stringify(item.profile_pic) ))

const finalQuery = "INSERT INTO account (first_name, last_name, nickname, birthday, gender, email, profile_pic) VALUES " + infos;
console.log(finalQuery);