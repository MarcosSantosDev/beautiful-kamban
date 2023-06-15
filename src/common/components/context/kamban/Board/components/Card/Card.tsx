import * as React from 'react';
import {
  AvatarIcon,
  BackpackIcon,
  ClockIcon,
  CounterClockwiseClockIcon,
  StopwatchIcon,
} from '@radix-ui/react-icons';

import { CardData } from '@/common/components/context/kamban/Board/types';
import { Checkbox } from '@/common/components/form';

import * as S from './Card.styles';

type CardProps = {
  data: CardData;
  onClickContentCard: () => void;
};

function Card({ data, onClickContentCard }: CardProps) {
  return (
    <S.CardContainer>
      <S.CardHeader>
        <Checkbox name="card" size="sm" />
        <S.Heading>{data.content}</S.Heading>
      </S.CardHeader>
      <S.CardContent onClick={onClickContentCard}>
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
      <S.CardFooter>
        <S.FooterContent>
          <ClockIcon width={16} height={16} /> <span>20d</span>
        </S.FooterContent>
        <S.FooterContent>
          <StopwatchIcon width={16} height={16} /> <span>20d</span>
        </S.FooterContent>
        <S.FooterContent>
          <CounterClockwiseClockIcon width={16} height={16} /> <span>20d</span>
        </S.FooterContent>
      </S.CardFooter>
    </S.CardContainer>
  );
}

export default React.memo(Card);
