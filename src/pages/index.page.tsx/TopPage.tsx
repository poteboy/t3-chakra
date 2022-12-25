import Link from "next/link";
import { Box, Image, Container, Spacer } from "@chakra-ui/react";
import { useEffect } from "react";
import { TextInput } from "@src/components";
import { colors } from "@src/styles";

export default function Home() {
  return (
    <Box flex={1} minH="100vh" bg={colors.baseBg}>
      <Container as="main"></Container>
    </Box>
  );
}
