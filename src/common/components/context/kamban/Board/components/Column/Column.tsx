import * as React from 'react';
import { PersonIcon, PlusIcon } from '@radix-ui/react-icons';

import { Checkbox } from '@/common/components/form';

import List from '../List/List';

import * as S from './Column.styles';

type ListProps = {
  listTitle: string;
  children: React.ReactNode;
};

function Column({ listTitle, children }: ListProps) {
  return (
    <S.ContainerColumn>
      <S.ContainerHeader>
        <S.Title>{listTitle}</S.Title>
        <S.HeadActionsContainer>
          <Checkbox name="checkAllOptions" size="sm" />
          <PersonIcon />
          <S.CountPresentation>
            <span>10 / 100</span>
          </S.CountPresentation>
        </S.HeadActionsContainer>
      </S.ContainerHeader>
      {children}
      <S.ContainerFooter>
        <S.Button type="button">
          <span>Adicionar novo produto</span>
          <PlusIcon />
        </S.Button>
      </S.ContainerFooter>
    </S.ContainerColumn>
  );
}

Column.List = List;

export default Column;
