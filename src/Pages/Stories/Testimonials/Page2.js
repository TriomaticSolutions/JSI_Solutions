import {
  Container,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function CallToActionWithIllustration() {
  return (
    <Container bg={"#002b3d"} my={16} py={10} maxW={"full"}>
      <Stack color={"white"} textAlign={"start"} align={"center"} spacing={4}>
        <Heading
          maxW={"1xl"}
          fontWeight={700}
          fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
          lineHeight={"100%"}
        >
          Changing lives through legal U.S. Immigration
        </Heading>
        <Text maxW={"2xl"}>
          We are honored to see the positive impact this process can have on the
          lives of individuals and their families from around the world. Whether
          you are starting this process from your home country, your current
          country of residence or you are already in the United States on a
          non-immigrant visa, this process can be successful for you!
        </Text>
      </Stack>
    </Container>
  );
}
