import { useRouter } from "next/router";

import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";
import Menu from "../components/menu/menu";

export default function Projects() {
  return (
    <>
      <Layout>
        <Head>
          <title>Alexey Chistyakov's projects</title>
        </Head>
        <Container>
          <Menu />
          <Intro />
          <h1>В разработке</h1>
        </Container>
      </Layout>
    </>
  );
}
