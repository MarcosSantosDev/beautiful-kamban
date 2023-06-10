import * as React from 'react';
import { PlusIcon } from '@radix-ui/react-icons';

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
        <S.Heading2>{listTitle}</S.Heading2>
        <S.Button type="button">
          <PlusIcon />
        </S.Button>
      </S.ContainerHeader>
      {children}
    </S.ContainerColumn>
  );
}

Column.List = List;

export default Column;
