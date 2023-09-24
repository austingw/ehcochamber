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
} from "@mantine/core";
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
  const linkProps = {
    href: "https://mantine.dev",
    target: "_blank",
    rel: "noopener noreferrer",
  };
  const theme = useMantineTheme();

  return (
    <Card withBorder radius="md" w={"100%"} shadow="sm">
      <Card.Section>
        <AudioPlayer url={url} art={art} />
      </Card.Section>
      <Stack spacing={4}>
        <Group
          spacing={"xs"}
          align="center"
          onClick={() => clickPost()}
          sx={{
            cursor: "pointer",
          }}
        >
          <Badge variant="gradient" gradient={{ from: "yellow", to: "red" }}>
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
        <Group spacing={0} align="center">
          <Text
            fz="sm"
            c="dimmed"
            lineClamp={1}
            w={"92%"}
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
            lineClamp={4}
            component="a"
            onClick={() => clickPost()}
            c={theme.colors.blue[6]}
            sx={{
              cursor: "pointer",
              ":hover": {
                textDecoration: "underline",
              },
            }}
          >
            View full post
          </Text>
        </Group>
        <Group position="apart" align="center" mx={-5}>
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
            Posted by <b>Bill Wormeater</b>
          </Badge>
        </Group>
      </Stack>
    </Card>
  );
};

export default PostCard;
