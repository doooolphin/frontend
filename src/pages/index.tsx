import TestEmotion from '@/TestEmotion';
import Layout from '@components/Common/Layout';
import MainHeader from '@components/Common/Header/MainHeader';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Doooolphin App !</title>
      </Head>
      <Layout header={<MainHeader hasNotice address="It's alright~ 우리집으로 가자~" />}>메인!</Layout>
    </>
  );
}
