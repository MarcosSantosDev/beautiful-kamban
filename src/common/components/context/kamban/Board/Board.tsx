import * as React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import Column from './components/Column/Column';
import { useBoard } from './hooks/useBoad';
import * as S from './Board.styles';

function Board() {
  const listType = 'TASKS';
  const { columnList, onDragEnd } = useBoard();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <S.BoardContainer>
        {columnList.map(({ id, title, items }) => (
          <Column key={id} listTitle={title}>
            <Column.List listId={id} listType={listType} listData={items} />
          </Column>
        ))}
      </S.BoardContainer>
    </DragDropContext>
  );
}

export default Board;
