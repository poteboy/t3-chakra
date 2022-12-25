import { useMutation } from "@src/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserInput, createUserSchema } from "@src/schema";
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  VStack,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { TextInput } from "@src/components/general";

export default function Home() {
  const {
    control,
    register,
    watch,
    formState: { errors },
  } = useForm<CreateUserInput>({
    resolver: zodResolver(createUserSchema),
    mode: "onChange",
  });

  const name = watch("name");

  const { mutate } = useMutation(["users.register-user"]);

  return (
    <Container flex={1} minH="100vh">
      <VStack justify="center" m="auto" flex={1}>
        <TextInput label="hello" control={control} name="name" />
      </VStack>
    </Container>
  );
}
