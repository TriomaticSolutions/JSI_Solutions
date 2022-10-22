import { Image, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import about__team1 from "../../../Assets/Images/about__team1.png";

export default function Page5() {
  return (
    <Stack minH={"80vh"} mt={20} direction={{ base: "column", md: "row" }}>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"contain"} src={about__team1} />
      </Flex>

      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            Our team is the best in the industry!
          </Heading>

          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Our team includes immigration attorneys, highly experienced
            immigration consultants, and even U.S. immigrants. <br />
          </Text>

          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Text color={"gray.700"}>Your EB-3 Unskilled Visa experts.</Text>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
