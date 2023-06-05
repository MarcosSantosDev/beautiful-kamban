import * as React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import List from './components/List/List';
import { orderItemBetweenLists } from './functions/board';
import { data } from './mocks/board';
import * as S from './Board.styles';

function Board() {
  const [listData, setListData] = React.useState(data);

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

      setListData(originalList =>
        orderItemBetweenLists({
          originalList,
          itemIndexMovementBetweenLists: {
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
    [setListData],
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <S.BoardContainer>
        {listData.map(list => (
          <List key={list.title} {...list} />
        ))}
      </S.BoardContainer>
    </DragDropContext>
  );
}

export default Board;
