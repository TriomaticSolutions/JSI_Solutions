import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function WithBackgroundImage() {
  return (
    <Flex w={"full"} h={"70vh"} bg={"#002b3d"}>
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
            The steps:
          </Text>
          <Stack direction={"row"}>
            <Text color={"white"}>
              We have helped countless people by successfully matching employers
              and foreign nationals to fill gaps in the American workforce
              through the EB3 Unskilled Visa process.
            </Text>
          </Stack>
          <Stack direction={"row"}>
            <Text color={"white"}>
              <span>1.</span> Determine your eligibility and select an employer
              sponsor <br />
              <span>2.</span> File and apply for the process with our partner
              attorneys <br />
              <span>3.</span> Get your Green Card or work authorization <br />
              <span>4.</span> Begin working for your employer <br />
              <span>5.</span> Live in the U.S.A as an immigrant visa holder!{" "}
              <br />
            </Text>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
