import Head from "next/head";
import Image from "next/image";
import { useMutation } from "@src/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserInput, createUserSchema } from "@src/schema";

export default function Home() {
  const {} = useForm<CreateUserInput>({
    resolver: zodResolver(createUserSchema),
    mode: "onChange",
  });

  const { mutate } = useMutation(["users.register-user"]);

  return <></>;
}
