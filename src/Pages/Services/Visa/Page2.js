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
            Timeline of the Process
          </Text>
          <Stack direction={"row"}>
            <Text color={"white"}>
              There are 5 unique phases of the EB-3 Unskilled Visa process,
              ending in the issuance of a U.S. Green Card.
            </Text>
          </Stack>
          <Stack direction={"row"}>
            <Text color={"white"}>
              <span>1.</span> Find an employer to sponsor you <br />
              <span>2.</span> File and apply for the process <br />
              <span>3.</span> Get Green Card or work authorization <br />
              <span>4.</span> Start working for your employer <br />
              <span>5.</span> Start working for your employer <br />
            </Text>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
