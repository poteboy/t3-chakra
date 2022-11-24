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

export default function Home() {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm<CreateUserInput>({
    resolver: zodResolver(createUserSchema),
    mode: "onChange",
  });

  const name = watch("name");

  useEffect(() => {
    console.log(name);
    console.log(errors.name);
  }, [name]);

  const { mutate } = useMutation(["users.register-user"]);

  return (
    <Container flex={1} minH="100vh">
      <VStack justify="center" m="auto" flex={1}>
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" {...register("name")} />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
      </VStack>
    </Container>
  );
}
