import {
  ActionIcon,
  Flex,
  Group,
  Title,
  Text,
  Card,
  Stack,
  Badge,
  useMantineTheme,
  rem,
  ScrollArea,
  Box,
  Divider,
  ThemeIcon,
  Paper,
  TypographyStylesProvider,
  Button,
  Accordion,
} from "@mantine/core";
import { RichTextEditor, Link } from "@mantine/tiptap";

import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { useMediaQuery } from "@mantine/hooks";
import {
  IconHeart,
  IconMessageCircle2,
  IconPlus,
  IconX,
} from "@tabler/icons-react";
import AudioPlayer from "./AudioPlayer";
import { useState } from "react";

interface PostProps {
  post: {
    id: number;
    url: string;
    art: string;
  };
}

const Post = ({ post }: PostProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [content, setContent] = useState("");
  const editor = useEditor({
    extensions: [StarterKit],
    content,
  });

  return (
    <>
      <ScrollArea.Autosize scrollbarSize={10}>
        <Card radius="md" w={"100%"} shadow="sm" pt={0}>
          <ActionIcon
            variant="subtle"
            color="gray"
            radius="xl"
            size="sm"
            onClick={() => {
              console.log("click");
            }}
            sx={{
              position: "absolute",
              top: 15,
              right: 15,
              zIndex: 999,
            }}
          >
            <IconX />
          </ActionIcon>

          <Card.Section>
            <Flex justify={"center"} align={"center"}>
              <AudioPlayer url={post?.url} art={post?.art} />
            </Flex>
          </Card.Section>
          <Stack spacing={4}>
            <Flex
              direction={isMobile ? "column" : "row"}
              align={isMobile ? "flex-start" : "center"}
              justify={isMobile ? "center" : "space-between"}
              gap={isMobile ? 10 : 0}
              pb={isMobile ? 10 : 0}
            >
              <Text fz="xl" fw={600} transform="uppercase">
                Two Pillarz Two Pillarz
              </Text>
              <Badge
                variant="outline"
                w={isMobile ? "100%" : "fit-content"}
                sx={{
                  cursor: "pointer",
                  ":hover": {
                    backgroundColor: "gray",
                  },
                }}
              >
                Posted by <b>Bill Wormeater</b>
              </Badge>
            </Flex>

            <Text fz="sm" c="dimmed" w={"100%"}>
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
            <Group align="flex-start" spacing={"xs"} py={10}>
              <Badge
                variant="gradient"
                gradient={{ from: "yellow", to: "red" }}
                sx={{
                  minWidth: "fit-content",
                  position: "relative",
                }}
              >
                demo
              </Badge>
              <Group spacing={4} align="center">
                <ActionIcon color={"red"} size={"xs"}>
                  <IconHeart />
                </ActionIcon>
                <Text fz="xs" c="dimmed">
                  733 likes
                </Text>
              </Group>
              <Group spacing={4} align="center">
                <ActionIcon
                  color={"yellow"}
                  size={"xs"}
                  sx={{
                    cursor: "default",
                  }}
                >
                  <IconMessageCircle2 />
                </ActionIcon>
                <Text fz="xs" c="dimmed">
                  12094 comments
                </Text>
              </Group>
              <Group spacing={"xs"} align="center">
                <Text fz="xs" c="dimmed">
                  Genre: <b>House</b>
                </Text>
                <Text fz="xs" c="dimmed">
                  BPM: <b>120</b>
                </Text>
                <Text fz="xs" c="dimmed">
                  Key: <b>A minor</b>
                </Text>
                <Text fz="xs" c="dimmed">
                  Influences: <b>Daft Punk</b>
                </Text>
              </Group>
            </Group>

            <Accordion
              chevron={<IconPlus size="1rem" />}
              styles={{
                chevron: {
                  "&[data-rotate]": {
                    transform: "rotate(45deg)",
                  },
                },
              }}
            >
              <Accordion.Item value="Add Comment">
                <Accordion.Control>Add Comment</Accordion.Control>
                <Accordion.Panel></Accordion.Panel>
              </Accordion.Item>
            </Accordion>

            <Paper radius="md">
              <Group>
                <div>
                  <Text fz="sm">Jacob Warnhalter</Text>
                  <Text fz="xs" c="dimmed">
                    10 minutes ago
                  </Text>
                </div>
              </Group>
              <TypographyStylesProvider>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      '<p>I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.</p>',
                  }}
                />
              </TypographyStylesProvider>
            </Paper>
          </Stack>
        </Card>
      </ScrollArea.Autosize>
    </>
  );
};

export default Post;
