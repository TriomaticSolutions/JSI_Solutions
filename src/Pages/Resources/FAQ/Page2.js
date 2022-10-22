import {
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function CallToActionWithIllustration() {
  return (
    <Container bg={"#002b3d"} mt={16} py={10} maxW={"full"}>
      <Stack color={"white"} textAlign={"start"} align={"center"} spacing={4}>
        <Heading
          maxW={"1xl"}
          fontWeight={700}
          fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
          lineHeight={"100%"}
          color={"orange.400"}
        >
          Check out our blog
        </Heading>
        <Text maxW={"2xl"}>
          Read more about particular EB-3 topics and BDV Solutions on our blog.
        </Text>

        <Stack direction={"row"}>
          <Button
            rounded={"full"}
            colorScheme={"orange"}
            bg={"orange.400"}
            _hover={{ bg: "orange.500" }}
          >
            Check out
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
