import {
  UnorderedList,
  ListItem,
  Image,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import about__sponsors2 from "../../../Assets/Images/about__sponsors2.png";

export default function Page5() {
  return (
    <Stack minH={"80vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            EB-3 Job Opportunities
          </Heading>

          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            BDV Solutions works exclusively with the EB-3 Unskilled Visa, which
            means that all the employers that we work with are sponsoring you
            for an entry-level unskilled job. We have jobs in the following
            industries:
          </Text>

          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <UnorderedList mb={5}>
              <ListItem>Food Prep</ListItem>
              <ListItem>Manufacturing</ListItem>
              <ListItem>Packaging</ListItem>
              <ListItem>Warehousing</ListItem>
            </UnorderedList>
          </Stack>
        </Stack>
      </Flex>

      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src={about__sponsors2} />
      </Flex>
    </Stack>
  );
}
