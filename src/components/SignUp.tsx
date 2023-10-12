import { api } from "@/utils/api";
import { Flex, Input, Stack } from "@mantine/core";

const SignUp = () => {
  const signUp = api.signup.useMutation({
    onSuccess: () => {
      console.log("success");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  function handleSignup() {
    signUp.mutate({
      email: "test",
      password: "test",
    });
  }

  return (
    <>
      <Flex>
        <Stack>
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
        </Stack>
      </Flex>
    </>
  );
};

export default SignUp;
