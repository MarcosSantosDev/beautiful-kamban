export type CardData = {
  id: string;
  content: string;
};

export type ListData = {
  id: string;
  title: string;
  cards: CardData[];
};

export const data: ListData[] = [
  {
    id: '1',
    title: 'Tarefas',
    cards: [
      {
        id: '1',
        content: 'Ler documentação da biblioteca stitches',
      },
      {
        id: '2',
        content: 'Ler documentação da biblioteca de componentes radix',
      },
      {
        id: '3',
        content: 'Estudar a biblioteca react-beautiful-dnd',
      },
      {
        id: '4',
        content: 'Criar um projeto com a biblioteca react-beautiful-dnd',
      },
    ],
  },
  {
    id: '2',
    title: 'Fazendo',
    cards: [
      {
        id: '5',
        content: 'Criar uma poc utilizando Nextjs + stitches + radix',
      },
    ],
  },
];
