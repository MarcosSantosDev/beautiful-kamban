import { faker } from '@faker-js/faker/locale/pt_BR';

import { CardData, ColumnData } from '../types';

function createRandomColumnItems() {
  return {
    id: faker.string.nanoid(12),
    content: faker.commerce.product(),
  };
}

function createRandomColumns() {
  return {
    id: faker.string.nanoid(10),
    title: faker.commerce.department(),
    items: faker.helpers.multiple<CardData>(createRandomColumnItems, {
      count: {
        min: 2,
        max: 10,
      },
    }),
  };
}

export function generateColumnList(): ColumnData[] {
  const data = faker.helpers.multiple<ColumnData>(createRandomColumns, {
    count: {
      min: 2,
      max: 10,
    },
  });

  return data;
}
