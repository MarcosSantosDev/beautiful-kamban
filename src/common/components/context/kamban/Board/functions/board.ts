import type { CardData, ListData } from '../mocks/board';

function moveItem<T>(items: T[], fromIndex: number, toIndex: number) {
  const item = items.splice(fromIndex, 1)[0];

  items.splice(toIndex, 0, item);

  return items;
}

type MoveItemBetweenListsParams = {
  originalList: ListData[];
  itemIndexMovementBetweenLists: {
    from: string;
    to: string;
  };
  itemIndexMovement: {
    from: string;
    to: string;
  };
};

export function orderItemBetweenLists({
  originalList,
  itemIndexMovementBetweenLists,
  itemIndexMovement,
}: MoveItemBetweenListsParams) {
  if (itemIndexMovementBetweenLists.to === itemIndexMovementBetweenLists.from) {
    const updateItemOnTheList = originalList.map(list => {
      if (list.id === itemIndexMovementBetweenLists.to) {
        return {
          ...list,
          cards: moveItem<CardData>(
            list.cards,
            Number(itemIndexMovement.from),
            Number(itemIndexMovement.to),
          ),
        };
      }

      return list;
    });

    return updateItemOnTheList;
  }

  const listFound = originalList.find(list => {
    return list.id === itemIndexMovementBetweenLists.from;
  });

  if (listFound) {
    const cardMoved = listFound.cards.splice(
      Number(itemIndexMovement.from),
      1,
    )[0];

    const updateItemOnTheList = originalList.map(list => {
      if (list.id === itemIndexMovementBetweenLists.to) {
        list.cards.splice(Number(itemIndexMovement.to), 0, cardMoved);

        return list;
      }

      return list;
    });

    return updateItemOnTheList;
  }

  return originalList;
}
