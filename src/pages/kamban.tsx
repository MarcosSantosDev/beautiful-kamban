import Head from 'next/head';

import KambanModule from '@/common/modules/kamban/kamban';

export default function Kamban() {
  return (
    <>
      <Head>
        <title>Beautiful Kamban</title>
      </Head>
      <KambanModule />
    </>
  );
}
