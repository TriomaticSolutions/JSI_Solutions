import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function WithBackgroundImage() {
  return (
    <Flex w={"full"} h={"50vh"} bg={"white"}>
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 2, md: 6 })}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={4}>
          <Text
            color={"orange.400"}
            fontWeight={700}
            fontSize={useBreakpointValue({ base: "1xl", md: "2xl" })}
          >
            Our Services
          </Text>
          <Stack direction={"row"}>
            <Text color={"black"}>
              We will be with you throughout the entirety of your visa case and
              supporting you along the way in each stage of the process. Our
              team starts our work before you even become our client in finding,
              vetting, and preparing employers to sponsor you for the EB-3
              Unskilled Green Card and ends after you get your Green Card
              approved by assisting you in your transition to work and
              supporting you throughout your employment.
            </Text>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
