import * as React from 'react';
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';

import type { CardData } from '../../mocks/board';

import * as S from './Card.styles';

type CardProps = {
  card: CardData;
  draggable: {
    provided: DraggableProvided;
    snapshot: DraggableStateSnapshot;
  };
};

const Card = React.forwardRef<HTMLLIElement, CardProps>(
  ({ card, draggable }, forwardRef) => {
    return (
      <S.CardContainer
        ref={forwardRef}
        {...draggable.provided.draggableProps}
        {...draggable.provided.dragHandleProps}
      >
        <S.Header>
          <S.Paragraph>EXAMPLE</S.Paragraph>
        </S.Header>
        <S.Content>
          <S.Paragraph>{card.content}</S.Paragraph>
        </S.Content>
      </S.CardContainer>
    );
  },
);

export default React.memo(Card);
