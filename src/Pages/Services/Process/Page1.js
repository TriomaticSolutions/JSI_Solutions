import { Image, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import services__process1 from "../../../Assets/Images/services__process1.png";

export default function Page5() {
  return (
    <Stack minH={"80vh"} mt={20} direction={{ base: "column", md: "row" }}>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={services__process1}
        />
      </Flex>

      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            Our Service
          </Heading>

          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            At BDV Solutions we are here with you from sourcing and vetting
            employers to the day you get your green card and beyond.
          </Text>

          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"gray.700"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
