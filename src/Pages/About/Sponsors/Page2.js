import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function WithBackgroundImage() {
  return (
    <Flex w={"full"} h={"35vh"} bg={"#012b3d"}>
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 2, md: 6 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={4}>
          <Text
            color={"white"}
            fontWeight={500}
            fontSize={useBreakpointValue({ base: "1xl", md: "2xl" })}
          >
            Trusted Service
          </Text>
          <Stack direction={"row"}>
            <Text color={"white"}>
              BDV Solutions vets employers, prepares them for the process and
              guides them from start to finish. We only connect you with
              employers that qualify for this program and are ready to start
              their journey in sponsoring you for your U.S. Green Card.
            </Text>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
