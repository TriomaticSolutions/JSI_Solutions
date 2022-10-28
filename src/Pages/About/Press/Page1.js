import { Container, Heading, Stack } from "@chakra-ui/react";

export default function CallToActionWithIllustration() {
  return (
    <Container bg={"white"} mt={100} py={10} maxW={"full"}>
      <Stack color={"white"} textAlign={"start"} align={"center"} spacing={4}>
        <Heading
          fontSize={{
            base: "1xl",
            sm: "2xl",
            md: "3xl",
          }}
          color="orange.400"
          _dark={{
            color: "white",
          }}
          fontWeight="bold"
        >
          Check out JSI Solutions’ <br /> mentions in the news!
        </Heading>
      </Stack>
    </Container>
  );
}
