import range from "lodash/range";
import { faker } from "@faker-js/faker";

function getRandomYear() {
  const randomDate = faker.date.past();
  const year = randomDate.getFullYear();
  return year;
}

const generateTaxe = () => {
  return {
    id: faker.string.uuid(),
    name: faker.word.sample(),
    year: getRandomYear(),
  };
};

export const generateTaxes = (numberOfTaxes = 3) =>
  [...range(numberOfTaxes)].map((n) => generateTaxe());
