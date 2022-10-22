import { Image, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import about__sponsors1 from "../../../Assets/Images/about__sponsors1.png";

export default function Page5() {
  return (
    <Stack minH={"80vh"} mt={20} direction={{ base: "column", md: "row" }}>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src={about__sponsors1} />
      </Flex>

      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            Our Sponsors
          </Heading>

          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            The project board is an exclusive resource for contract work. It's
            perfect for freelancers, agencies, and moonlighters.
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
              Explore the job opening
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
