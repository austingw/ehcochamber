import { IconHeart, IconMessageCircle2 } from "@tabler/icons-react";
import {
  Card,
  Text,
  ActionIcon,
  Badge,
  Group,
  useMantineTheme,
  rem,
  Stack,
  Flex,
} from "@mantine/core";
import useMediaQuery from "@mantine/hooks";
import AudioPlayer from "./AudioPlayer";

interface PostCardProps {
  url: string;
  art: string;
  clickPost: () => void;
  clickLike: () => void;
  clickComment: () => void;
}

const PostCard = ({
  url,
  art,
  clickPost,
  clickLike,
  clickComment,
}: PostCardProps) => {
  const theme = useMantineTheme();

  return (
    <Card
      withBorder
      radius="md"
      w={"100%"}
      shadow="sm"
      sx={{
        cursor: "pointer",
      }}
    >
      <Card.Section>
        <Flex
          justify={"center"}
          align={"center"}
          sx={{
            zIndex: 999,
          }}
        >
          <AudioPlayer url={url} art={art} />
        </Flex>
      </Card.Section>
      <Stack spacing={4}>
        <Group
          spacing={"xs"}
          align="center"
          noWrap
          onClick={() => clickPost()}
          sx={{
            cursor: "pointer",
          }}
        >
          <Badge
            variant="gradient"
            gradient={{ from: "yellow", to: "red" }}
            sx={{
              minWidth: "fit-content",
            }}
          >
            demo
          </Badge>
          <Text
            fz="xl"
            fw={600}
            transform="uppercase"
            lineClamp={1}
            sx={{
              cursor: "pointer",
              ":hover": {
                textDecoration: "underline",
              },
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            Two Pillarz Two Pillarz Two Pillarz Two Pillarz Two Pillarz Two
            Pillarz Two Pillarz Two Pillarz Two Pillarz Two Pillarz Two Pillarz
            Two Pillarz Two Pillarz Two Pillarz Two Pillarz Two Pillarz Two
            Pillarz Two Pillarz Two Pillarz Two Pillarz Two Pillarz Two Pillarz
            Two Pillarz Two Pillarz Two Pillarz Two Pillarz Two Pillarz Two
            Pillarz Two Pillarz Two Pillarz Two Pillarz Two Pillarz Two Pillarz
            Two Pillarz Two Pillarz Two Pillarz Two Pillarz Two Pillarz Two
            Pillarz Two Pillarz Two Pillarz Two Pillarz Two Pillarz Two Pillarz
            Two Pillarz Two Pillarz Two Pillarz Two Pillarz
          </Text>
        </Group>
        <Group spacing={0} align="center" noWrap>
          <Text
            fz="sm"
            c="dimmed"
            lineClamp={1}
            w={"100%"}
            onClick={() => clickPost()}
            sx={{
              cursor: "pointer",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            A description of the inspo behind the track blah blah blah A
            description of the inspo behind the track blah blah blah A
            description of the inspo behind the track blah blah blah A
            description of the inspo behind the track blah blah blah A
            description of the inspo behind the track blah blah blah A
            description of the inspo behind the track blah blah blah A
            description of the inspo behind the track blah blah blah A
            description of the inspo behind the track blah blah blah A
            description of the inspo behind the track blah blah blah A
            description of the inspo behind the track blah blah blah A
            description of the inspo behind the track blah blah blah A
            description of the inspo behind the track blah blah blah A
            description of the inspo behind the track blah blah blah A
            description of the inspo behind the track blah blah blah A
            description of the inspo behind the track blah blah blah A
            description of the inspo behind the track blah blah blah A
            description of the inspo behind the track blah blah blah A
            description of the inspo behind the track blah blah blah A
            description of the inspo behind the track blah blah blah A
            description of the inspo behind the track blah blah blah A
            description of the inspo behind the track blah blah blah
          </Text>
          <Text
            fz="sm"
            lineClamp={1}
            component="a"
            onClick={() => clickPost()}
            c={theme.colors.blue[6]}
            sx={{
              cursor: "pointer",
              ":hover": {
                textDecoration: "underline",
              },
              minWidth: "fit-content",
            }}
          >
            View full post
          </Text>
        </Group>
        <Group
          position="apart"
          align="flex-start"
          spacing={"sm"}
          mx={-5}
          pt={5}
        >
          <Group spacing={"xs"} align="center">
            <Group spacing={4} align="center">
              <ActionIcon color={"red"} size={"sm"} onClick={() => clickLike()}>
                <IconHeart style={{ width: rem(16), height: rem(16) }} />
              </ActionIcon>
              <Text fz="xs" c="dimmed">
                733 likes
              </Text>
            </Group>
            <Group spacing={4} align="center">
              <ActionIcon
                color={"yellow"}
                size={"sm"}
                onClick={() => clickComment()}
              >
                <IconMessageCircle2
                  style={{ width: rem(16), height: rem(16) }}
                />
              </ActionIcon>
              <Text fz="xs" c="dimmed">
                12094 comments
              </Text>
            </Group>
          </Group>

          <Badge
            variant="outline"
            onClick={() => {
              console.log("posted by");
            }}
            sx={{
              cursor: "pointer",
              ":hover": {
                backgroundColor: "gray",
              },
            }}
          >
            Bill Wormeater
          </Badge>
        </Group>
      </Stack>
    </Card>
  );
};

export default PostCard;
