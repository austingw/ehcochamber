import Head from "next/head";
import { api } from "@/utils/api";
import { Flex, Text } from "@mantine/core";

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
        sx={{ height: "100vh" }}
      >
        <Text>
          {hello.data ? hello.data.greeting : "Loading tRPC query..."}{" "}
        </Text>
        <audio
          src={"https://www.myinstants.com/media/sounds/goofy-ahh-sounds.mp3"}
          controls
        />
      </Flex>
    </>
  );
}
