import { Flex } from "@mantine/core";

interface PostProps {
  post: string;
}

const Post = ({}: PostProps) => {
  return (
    <>
      <Flex>
        <h1>Post</h1>
      </Flex>
    </>
  );
};

export default Post;
