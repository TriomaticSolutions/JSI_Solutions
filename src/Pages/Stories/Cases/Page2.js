import {
  Container,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function CallToActionWithIllustration() {
  return (
    <Container bg={"#002b3d"} my={16} py={10} maxW={"full"}>
      <Stack color={"white"} textAlign={"start"} align={"center"} spacing={4}>
        <Heading
          maxW={"1xl"}
          fontWeight={700}
          fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
          lineHeight={"100%"}
          color={"orange.400"}
        >
          A Process for almost anyone
        </Heading>
        <Text maxW={"2xl"}>
          We have seen first hand this process work for many different people at
          many different stages in their lives. The EB-3 program kickstarts
          opportunity in the United States by providing a U.S. Green Card to the
          main applicant and their dependents. Read about some of our client's
          experiences with this Green Card process with BDV Solutions. No two
          cases are the same!
          <br /> <br />
          How does this process actually work for people? How long will the EB-3
          Unskilled Visa take? Can I get promoted in my sponsor job? What kind
          of opportunities do I have after the program? Read to learn more about
          how individuals from around the world have experienced this process.
        </Text>
      </Stack>
    </Container>
  );
}
