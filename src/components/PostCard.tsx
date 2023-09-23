import {
  IconBookmark,
  IconHeart,
  IconShare,
  IconMessageCircle2,
} from "@tabler/icons-react";
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  useMantineTheme,
  rem,
  ColorSwatch,
} from "@mantine/core";
import AudioPlayer from "./AudioPlayer";

interface PostCardProps {
  url: string;
  art: string;
}

const PostCard = ({ url, art }: PostCardProps) => {
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
      <Group>
        <Badge variant="gradient" gradient={{ from: "yellow", to: "red" }}>
          demo
        </Badge>

        <Text fw={500} component="a" {...linkProps}>
          Two Pillarz
        </Text>
      </Group>
      <Text fz="sm" c="dimmed" lineClamp={4}>
        A description of the inspo behind the track blah blah blah
      </Text>

      <Group position="apart" align="center">
        <Group spacing={"xs"} align="center">
          <ActionIcon>
            <IconHeart
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.red[6]}
            />
          </ActionIcon>
          <Text fz="xs" c="dimmed">
            733 likes
          </Text>
          <ActionIcon>
            <IconMessageCircle2
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.yellow[7]}
            />
          </ActionIcon>

          <Text fz="xs" c="dimmed">
            12094 comments
          </Text>
        </Group>
        <Text fz="xs" inline c={"dimmed"}>
          Posted by <b>Bill Wormeater</b>
        </Text>
      </Group>
    </Card>
  );
};

export default PostCard;
