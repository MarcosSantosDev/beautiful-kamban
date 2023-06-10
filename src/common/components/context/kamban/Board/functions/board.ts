import {
  CardData,
  ColumnData,
} from '@/common/components/context/kamban/Board/types';

function moveItemBetweenItems<T>(
  items: T[],
  fromIndex: number,
  toIndex: number,
) {
  const item = items.splice(fromIndex, 1)[0];

  items.splice(toIndex, 0, item);

  return items;
}

type MoveItemBetweenColumnsParams = {
  originalColumnList: ColumnData[];
  itemIndexMovementBetweenColumns: {
    from: string;
    to: string;
  };
  itemIndexMovement: {
    from: string;
    to: string;
  };
};

export function orderItemBetweenLists({
  originalColumnList,
  itemIndexMovementBetweenColumns,
  itemIndexMovement,
}: MoveItemBetweenColumnsParams) {
  if (
    itemIndexMovementBetweenColumns.to === itemIndexMovementBetweenColumns.from
  ) {
    const updateItemOnTheColumnList: ColumnData[] = originalColumnList.map(
      column => {
        if (column.id === itemIndexMovementBetweenColumns.to) {
          const listWithNewOrder: ColumnData = {
            ...column,
            items: moveItemBetweenItems<CardData>(
              column.items,
              Number(itemIndexMovement.from),
              Number(itemIndexMovement.to),
            ),
          };

          return listWithNewOrder;
        }

        return column;
      },
    );

    return updateItemOnTheColumnList;
  }

  const columnListFound = originalColumnList.find(column => {
    return column.id === itemIndexMovementBetweenColumns.from;
  });

  if (columnListFound) {
    const itemMoved = columnListFound.items.splice(
      Number(itemIndexMovement.from),
      1,
    )[0];

    const updateItemOnTheColumnList = originalColumnList.map(column => {
      if (column.id === itemIndexMovementBetweenColumns.to) {
        column.items.splice(Number(itemIndexMovement.to), 0, itemMoved);

        return column;
      }

      return column;
    });

    return updateItemOnTheColumnList;
  }

  return originalColumnList;
}
