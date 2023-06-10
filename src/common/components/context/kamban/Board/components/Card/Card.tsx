import * as React from 'react';
import { AvatarIcon, BackpackIcon } from '@radix-ui/react-icons';

import { CardData } from '@/common/components/context/kamban/Board/types';

import PriorityTag from '../PriorityTag/PriorityTag';

import * as S from './Card.styles';

type CardProps = {
  data: CardData;
};

function Card({ data }: CardProps) {
  return (
    <S.CardContainer>
      <S.CardHeader>
        <p>EXAMPLE</p>
      </S.CardHeader>
      <S.CardContent>
        <PriorityTag priority="low" />
        <S.Heading>{data.content}</S.Heading>
        <S.DetailsList>
          <S.DetailsItem>
            <S.IconContent>
              <AvatarIcon width={16} height={16} />
            </S.IconContent>
            <S.DetailsContent>
              <S.DetailsHeading>Responsavel</S.DetailsHeading>
              <S.DetailsParagraph>Marcos Santos</S.DetailsParagraph>
            </S.DetailsContent>
          </S.DetailsItem>
          <S.DetailsItem>
            <S.IconContent>
              <BackpackIcon width={16} height={16} />
            </S.IconContent>
            <S.DetailsContent>
              <S.DetailsHeading>Cargo</S.DetailsHeading>
              <S.DetailsParagraph>Lider de TI</S.DetailsParagraph>
            </S.DetailsContent>
          </S.DetailsItem>
        </S.DetailsList>
      </S.CardContent>
    </S.CardContainer>
  );
}

export default React.memo(Card);
