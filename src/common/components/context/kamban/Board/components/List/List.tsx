import { Draggable, Droppable } from 'react-beautiful-dnd';
import { PlusIcon } from '@radix-ui/react-icons';

import { ListTypes } from '../../constants/board';
import type { ListData } from '../../mocks/board';
import Card from '../Card/Card';

import * as S from './List.styles';

type ListProps = ListData;

function List({ id, title, cards }: ListProps) {
  return (
    <Droppable droppableId={id} type={ListTypes.CARD} direction="vertical">
      {droppableProvided => (
        <S.ListContainer
          {...droppableProvided.droppableProps}
          ref={droppableProvided.innerRef}
        >
          <S.Header>
            <S.Heading2>{title}</S.Heading2>
            <S.Button type="button">
              <PlusIcon />
            </S.Button>
          </S.Header>
          <S.UlList>
            {cards.map((card, index) => (
              <Draggable
                // adding a key is important!
                key={card.id}
                draggableId={`draggable-${card.id}`}
                index={index}
              >
                {(draggableProvided, draggableSnapshot) => (
                  <Card
                    ref={draggableProvided.innerRef}
                    card={card}
                    draggable={{
                      provided: draggableProvided,
                      snapshot: draggableSnapshot,
                    }}
                  />
                )}
              </Draggable>
            ))}
          </S.UlList>
          {droppableProvided.placeholder}
        </S.ListContainer>
      )}
    </Droppable>
  );
}

export default List;
