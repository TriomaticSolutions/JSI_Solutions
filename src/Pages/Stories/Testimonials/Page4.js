import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function CallToActionWithIllustration() {
  return (
    <Container my={10} py={10} maxW={"full"}>
      <Stack textAlign={"start"} align={"center"} spacing={4}>
        <Heading
          maxW={"1xl"}
          fontWeight={700}
          fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
          lineHeight={"100%"}
        >
          Case Studies
        </Heading>
        <Text maxW={"2xl"}>
          What does a normal EB3 Unskilled process look like? Every single
          person has a different timeline and experience in this process. Check
          out our testimonials to get an idea of the range of timelines and
          experiences our clients have.
        </Text>

        <Stack direction={"row"}>
          <Button
            rounded={"full"}
            colorScheme={"orange"}
            bg={"orange.400"}
            _hover={{ bg: "orange.500" }}
          >
            Read case studies
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
