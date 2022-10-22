import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function WithBackgroundImage() {
  return (
    <Flex w={"full"} h={"30vh"} bg={"#005287"}>
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 2, md: 6 })}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={4}>
          <Text
            color={"white"}
            fontWeight={500}
            fontSize={useBreakpointValue({ base: "1xl", md: "2xl" })}
          >
            Where our sponsors are located
          </Text>
          <Stack direction={"row"}>
            <Text color={"white"}>
              Our employers are located across the country! We are excited that
              we have been able to work with employers in 36 states and
              counting! BDV Solutions is hoping to even further broaden the
              states that we have offerings in, so stay tuned in the future.
            </Text>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
