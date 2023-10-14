import { api } from "@/utils/api";
import {
  Button,
  Flex,
  LoadingOverlay,
  PasswordInput,
  Stack,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";

const SignUp = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isLoading } = api.signup.useMutation({
    onSuccess: () => {
      console.log("success");
      notifications.show({
        title: "Success",
        message: "You have successfully signed up!",
        color: "green",
        icon: <IconCheck />,
      });
    },
    onError: (err) => {
      console.log("error", err);
      notifications.show({
        title: "Error",
        message: "There was an error signing up.",
        color: "red",
        icon: <IconX />,
      });
    },
  });

  function handleSignup() {
    mutate({
      email: form.values.email,
      password: form.values.password,
    });
  }

  return (
    <>
      <form
        onSubmit={form.onSubmit((values) => {
          console.log("values", values);
          handleSignup();
        })}
      >
        <Flex>
          <Stack>
            <LoadingOverlay visible={isLoading} />
            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              withAsterisk
              label="Password"
              placeholder="Password"
              {...form.getInputProps("password")}
            />
            <Button type="submit">Sign Up</Button>
          </Stack>
        </Flex>
      </form>
    </>
  );
};

export default SignUp;
