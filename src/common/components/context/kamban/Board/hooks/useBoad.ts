import * as React from 'react';
import { DropResult } from 'react-beautiful-dnd';

import { orderItemBetweenLists } from '../functions/board';
import { mockColumnList } from '../mocks/board';

export const useBoard = () => {
  const [columnList, setColumnList] = React.useState(mockColumnList);

  const onDragEnd = React.useCallback(
    (result: DropResult) => {
      // dropped outside the list
      if (!result.destination) {
        return;
      }
      // destination
      const destinationIndex = result.destination.index;
      const destinationDroppableId = result.destination.droppableId;

      // source
      const sourceIndex = result.source.index;
      const sourceDroppableId = result.source.droppableId;

      const indexIsEqual = destinationIndex === sourceIndex;
      const droppableIsEqual = destinationDroppableId === sourceDroppableId;

      if (indexIsEqual && droppableIsEqual) {
        return;
      }

      setColumnList(originalColumnList =>
        orderItemBetweenLists({
          originalColumnList,
          itemIndexMovementBetweenColumns: {
            from: sourceDroppableId,
            to: destinationDroppableId,
          },
          itemIndexMovement: {
            from: sourceIndex.toString(),
            to: destinationIndex.toString(),
          },
        }),
      );
    },
    [setColumnList],
  );

  return {
    onDragEnd,
    columnList,
  };
};
