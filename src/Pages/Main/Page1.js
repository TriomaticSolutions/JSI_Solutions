import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import main1 from "../../Assets/Images/main1(1).png";

export default function CallToActionWithIllustration() {
  return (
    <div>
      <Container marginTop={28} maxW={"5xl"}>
        <Stack textAlign={"start"} align={"center"} spacing={4}>
          <Heading
            maxW={"1xl"}
            fontWeight={500}
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            lineHeight={"100%"}
            color={"#002b3d"}
          >
            We have helped thousands of people <br />
            <Text as={"span"} color={"orange.400"}>
              start their U.S. green card journey
            </Text>
          </Heading>
          <Text color={"gray.800"} maxW={"2xl"}>
            We have employers ready to sponsor you for a U.S. green card today.
          </Text>

          <Stack spacing={4} direction={"row"}>
            <Button
              rounded={"full"}
              px={4}
              colorScheme={"orange"}
              bg={"orange.400"}
              _hover={{ bg: "gray.800" }}
            >
              Explore your options
            </Button>
          </Stack>
        </Stack>
      </Container>
      <Flex w={"full"} justifyContent="center">
        <img src={main1} alt="" />
      </Flex>
    </div>
  );
}
