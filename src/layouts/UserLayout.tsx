import { AppShell } from "@mantine/core";
import type { ReactNode } from "react";

//Layout for users when they are logged in, uses AppShell from Mantine for sidebar

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AppShell>{children}</AppShell>
    </>
  );
};

export default UserLayout;
