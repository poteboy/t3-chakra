import { useMutation } from "@src/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserInput, createUserSchema } from "@src/schema";
import { Container, VStack } from "@chakra-ui/react";

export default function Home() {
  const {} = useForm<CreateUserInput>({
    resolver: zodResolver(createUserSchema),
    mode: "onChange",
  });

  const { mutate } = useMutation(["users.register-user"]);

  return (
    <Container>
      <VStack justify="center" m="auto">
        hello world
      </VStack>
    </Container>
  );
}
