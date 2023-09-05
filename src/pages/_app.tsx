import { type AppType } from "next/app";
import { MantineProvider } from "@mantine/core";
import { api } from "@/utils/api";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  );
};

export default api.withTRPC(MyApp);
