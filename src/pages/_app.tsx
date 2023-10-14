import { type AppType } from "next/app";
import { MantineProvider } from "@mantine/core";
import { api } from "@/utils/api";
import { Notifications } from "@mantine/notifications";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "light" }}
    >
      <Notifications />
      <Component {...pageProps} />
    </MantineProvider>
  );
};

export default api.withTRPC(MyApp);
