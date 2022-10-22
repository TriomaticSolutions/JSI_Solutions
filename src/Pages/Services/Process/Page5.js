import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";

export default function WithBackgroundImage() {
  return (
    <Flex w={"full"} h={"80vh"} bg={"white"}>
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 2, md: 6 })}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={4}>
          <Text
            color={"orange.400"}
            fontWeight={700}
            fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
          >
            Our Employers
          </Text>
          <Stack direction={"row"}>
            <Text color={"black"}>
              Part of our process includes finding and vetting employers who
              will sponsor you for the EB3 Unskilled Green Card. One of the most
              difficult part of this process if finding an employer who can and
              will sponsor you for your immigrant visa petition.
            </Text>
          </Stack>
          <br />
          <Stack direction={"row"}>
            <Text color={"black"}>
              You can learn more about our employers here. And you can see all
              of our current employer sponsors in the job pool when you create a
              free account here.
            </Text>
          </Stack>

          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"gray.700"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Explore the employeers options
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
