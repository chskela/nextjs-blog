import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../types/post";
import Menu from "../components/menu/menu";

type Props = {
  allPosts: Post[];
};

const News = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Alexey Chistyakov's news</title>
        </Head>
        <Container>
          <Menu />
          <Intro title="Alexey Chistyakov's news" />
          <h1>В разработке</h1>
        </Container>
      </Layout>
    </>
  );
};

export default News;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
