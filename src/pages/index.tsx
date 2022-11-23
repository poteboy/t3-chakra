import Head from "next/head";
import Image from "next/image";
import { trpc } from "@src/utils/trpc";

export default function Home() {
  const { data, isLoading } = trpc.useQuery(["hello"]);

  console.log(data);

  return <></>;
}
