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
    <Container bg={"#002b3d"} mt={16} py={10} maxW={"full"}>
      <Stack color={"white"} textAlign={"start"} align={"center"} spacing={4}>
        <Heading
          maxW={"1xl"}
          fontWeight={700}
          fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
          lineHeight={"100%"}
        >
          A Reliable Process
        </Heading>
        <Text maxW={"2xl"}>
          The EB-3 Unskilled visa process is not based on luck, chance, or
          skill. The EB-3 Unskilled Visa process leads many applicants with a
          range of backgrounds to a U.S. Green Card.
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
