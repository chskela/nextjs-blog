import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import Menu from "../components/menu/menu";

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Alexey Chistyakov developer</title>
        </Head>
        <Container>
          <Menu />
          <Intro title="Alexey Chistyakov - Developer" />
          <h1>В разработке</h1>
        </Container>
      </Layout>
    </>
  );
};

export default Index;
