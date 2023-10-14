import Head from "next/head";
import { Flex } from "@mantine/core";
import Feed from "@/components/Feed";
import SignUp from "@/components/SignUp";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ehcochamber</title>
        <meta
          name="description"
          content="The premiere platform for music artists to collaborate, discuss, and share their progress in closed-garden communities."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        h={"100%"}
        w={"100%"}
      >
        <SignUp />

        <Feed />
      </Flex>
    </>
  );
}
