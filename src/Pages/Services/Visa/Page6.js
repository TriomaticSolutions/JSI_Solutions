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
    <Flex w={"full"} my={10} bg={"white"}>
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
            Why does this process work?
          </Text>

          <Stack direction={"row"}>
            <Text color={"black"}>
              More employers than ever are struggling to find applicants for
              their unskilled positions. Industries like janitorial,
              restaurants, packing and warehousing have been hit hardest. Rather
              than closing their doors, many employers have looked for creative
              solutions to staff their businesses. One option that many
              employers have found advantageous is pursuing sponsorships of
              prospective immigrants who are willing to fill openings with the
              help of an EB-3 unskilled visa.
            </Text>
          </Stack>

          <Stack direction={"row"}>
            <Text color={"black"}>
              The Immigration Act of 1990 created an Employment Based Visa
              program that has allowed US businesses to sponsor foreign
              nationals willing and qualified to work. There are five categories
              of EB visas, the first two of which require skilled labor and
              extensive education, and part of third of which (the EB-3 visa)
              targets workers who can perform unskilled labor for their future
              employers.
            </Text>
          </Stack>

          <Stack direction={"row"}>
            <Text color={"black"}>
              The EB-3 "Other Worker" Visa process leads directly to U.S.
              permanent residency with more favorable conditions than most
              routes available in immigration law today!
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
              Check our stories
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
