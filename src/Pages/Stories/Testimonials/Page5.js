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
    <Container bg={"#002b3d"} mt={10} py={10} maxW={"full"}>
      <Stack textAlign={"start"} align={"center"} spacing={4}>
        <Heading
          maxW={"1xl"}
          fontWeight={700}
          fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
          lineHeight={"100%"}
          color={"orange.400"}
        >
          Is this process right for you?
        </Heading>
        <Heading
          maxW={"1xl"}
          fontWeight={600}
          fontSize={useBreakpointValue({ base: "1xl", md: "2xl" })}
          lineHeight={"100%"}
          color={"blue.400"}
        >
          Will this process work for your situation?
        </Heading>
        <Text color={"white"} maxW={"2xl"}>
          Once you create an account here, you can set up a free introductory
          call with one of our employees who will discuss your case with you and
          help you evaluate if this program is right for you.
        </Text>

        <Stack direction={"row"}>
          <Button
            rounded={"full"}
            colorScheme={"orange"}
            bg={"orange.400"}
            _hover={{ bg: "orange.500" }}
          >
            Book your free call
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
