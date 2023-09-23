import { Flex } from "@mantine/core";
import PostCard from "./PostCard";

const Feed = () => {
  const testPosts = [
    {
      id: 1,
      url: "https://xntslrrernpkzvgsuipl.supabase.co/storage/v1/object/sign/Audio/Two%20Pillars(7).wav?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBdWRpby9Ud28gUGlsbGFycyg3KS53YXYiLCJpYXQiOjE2OTQ5ODU3OTUsImV4cCI6MTcyNjUyMTc5NX0.2jcTsYUzbSXxLKnrxpzgpB0dYxqhVymprddFt80e39g&t=2023-09-17T21%3A23%3A15.979Z",
      art: "",
    },
    {
      id: 1,
      url: "https://xntslrrernpkzvgsuipl.supabase.co/storage/v1/object/sign/Audio/Two%20Pillars(7).wav?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBdWRpby9Ud28gUGlsbGFycyg3KS53YXYiLCJpYXQiOjE2OTQ5ODU3OTUsImV4cCI6MTcyNjUyMTc5NX0.2jcTsYUzbSXxLKnrxpzgpB0dYxqhVymprddFt80e39g&t=2023-09-17T21%3A23%3A15.979Z",
      art: "",
    },
    {
      id: 1,
      url: "https://xntslrrernpkzvgsuipl.supabase.co/storage/v1/object/sign/Audio/Two%20Pillars(7).wav?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBdWRpby9Ud28gUGlsbGFycyg3KS53YXYiLCJpYXQiOjE2OTQ5ODU3OTUsImV4cCI6MTcyNjUyMTc5NX0.2jcTsYUzbSXxLKnrxpzgpB0dYxqhVymprddFt80e39g&t=2023-09-17T21%3A23%3A15.979Z",
      art: "",
    },
  ];

  return (
    <>
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        px={25}
        gap={25}
        w="100%"
        h="100%"
      >
        {testPosts.map((post) => {
          return <PostCard key={post.id} url={post?.url} art={post.art} />;
        })}
      </Flex>
    </>
  );
};

export default Feed;
