import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import Header from "../components/Header";
import PostBox from "../components/PostBox";

const Home: NextPage = () => {
  return (
    <div className="my-7 mx-auto max-w-5xl">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}

      {/* PostBox */}
      <PostBox />

      <div className="flex">
        {/* Feed */}
        <Feed />
      </div>
    </div>
  );
};

export default Home;
