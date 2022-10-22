import {
  Container,
  Heading,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function CallToActionWithIllustration() {
  return (
    <Container bg={"white"} mt={100} py={10} maxW={"full"}>
      <Stack color={"white"} textAlign={"start"} align={"center"} spacing={4}>
        <Heading
          maxW={"1xl"}
          fontWeight={700}
          fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
          lineHeight={"100%"}
          color={"orange.400"}
        >
          Check out JSI Solutions’ <br /> mentions in the news!
        </Heading>
      </Stack>
    </Container>
  );
}
