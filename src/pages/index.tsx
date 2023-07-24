import TestEmotion from '@/TestEmotion';
import Layout from '@components/Common/Layout';
import MainHeader from '@components/Common/Header/MainHeader';

export default function Home() {
  return <Layout header={<MainHeader hasNotice address="It's alright~ 우리집으로 가자~" />}>메인!</Layout>;
}
