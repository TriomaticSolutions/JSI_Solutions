import {
  Image,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import services__unskill1 from "../../../Assets/Images/services__unskill1.png";

export default function Page5() {
  return (
    <Stack minH={"80vh"} direction={{ base: "column", md: "row" }}>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={services__unskill1}
        />
      </Flex>

      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
            Who is eligible for EB3?
          </Heading>

          <UnorderedList pl={10}>
            <ListItem>No degree requirements needed</ListItem>
            <ListItem>No prior work experience needed</ListItem>
            <ListItem>Can’t be overqualified</ListItem>
            <ListItem>Need an employer sponsor</ListItem>
            <ListItem>You can adjust your visa status within the U.S</ListItem>
            <ListItem>You can apply from your home country</ListItem>
          </UnorderedList>

          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"gray.700"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Determine your eligibility
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
