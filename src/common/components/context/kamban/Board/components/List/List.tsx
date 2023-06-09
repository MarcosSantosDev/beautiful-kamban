import * as React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { CardData } from '@/common/components/context/kamban/Board/types';
import { Dialog } from '@/common/components/structure';

import Card from '../Card/Card';

import * as S from './List.styles';

type ListProps = {
  listId: string;
  listType: string;
  listData: CardData[];
  isDropDisabled?: boolean;
  style?: React.CSSProperties;
};

function List({
  listId,
  listType,
  listData,
  isDropDisabled = false,
  style = {},
}: ListProps) {
  const [dialogState, setDialogState] = React.useState(false);

  const handleToggleDialogState = (newDialogState: boolean) => {
    setDialogState(newDialogState);
  };

  return (
    <>
      <Droppable
        droppableId={listId}
        type={listType}
        direction="vertical"
        isDropDisabled={isDropDisabled}
      >
        {(droppableProvided, droppableSnapshot) => (
          <S.Wrapper
            style={style}
            isDraggingOver={droppableSnapshot.isDraggingOver}
            isDropDisabled={isDropDisabled}
            isDraggingFrom={Boolean(droppableSnapshot.draggingFromThisWith)}
            {...droppableProvided.droppableProps}
          >
            <S.ScrollContainer>
              <S.DropZone ref={droppableProvided.innerRef}>
                {listData.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={`draggable-${item.id}`}
                    index={index}
                  >
                    {draggableProvided => (
                      <div
                        key={item.id}
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                      >
                        <Card
                          data={item}
                          onClickContentCard={() => {
                            handleToggleDialogState(true);
                          }}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {droppableProvided.placeholder}
              </S.DropZone>
            </S.ScrollContainer>
          </S.Wrapper>
        )}
      </Droppable>
      <Dialog open={dialogState} onOpenChange={handleToggleDialogState}>
        <div>
          <h2>Dialog Content</h2>
        </div>
      </Dialog>
    </>
  );
}

export default List;
