import Head from "next/head";
import { api } from "@/utils/api";
import { Flex, Text } from "@mantine/core";
import Feed from "@/components/Feed";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from ehcochamber!" });

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
        <Text>
          {hello.data ? hello.data.greeting : "Loading tRPC query..."}{" "}
        </Text>
        <Feed />
      </Flex>
    </>
  );
}
