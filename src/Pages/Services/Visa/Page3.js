import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function WithBackgroundImage() {
  return (
    <Flex w={"full"} my={16} bg={"white"}>
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
            Longstanding Success
          </Text>
          <Stack direction={"row"}>
            <Text color={"black"}>
              The US Government has created a visa for people who are seeking
              employment in unskilled positions. This is the EB-3 'Other
              Workers' Visa and it allows US employers to sponsor foreign
              national in jobs that are experiencing a chronic labor shortage.
              <br /> <br />
              Each year, the U.S. government allocates 10,000 visas for
              unskilled positions For many, the most difficult part of the
              process is finding an employer able and willing to sponsor them.
              BDV Solutions partners with qualified employers who are ready to
              sponsor foreign nationals.
              <br /> <br />
              The EB-3 'Other Workers' Visa is a great opportunity for you to
              gain permanent residence to the United States and may be obtained
              by adjusting your status or through consular processing from your
              home country. If applicable, your spouse and unmarried children
              under 21 are eligible too!
            </Text>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
