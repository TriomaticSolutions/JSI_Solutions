import {
  Box,
  Flex,
  chakra,
  Stack,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";

const questionsContent = [
  {
    id: 1,
    name: "1. What is BDV Solutions? What services to BDV Solutions provide?",
    content:
      "a. BDV Solutions, LLC, of Greenville, South Carolina, is an employment-based immigration consulting firm that connects employers seeking workers with potential immigrants. We assist and consult employers and foreign nationals through the process of obtaining the EB-3 unskilled visa.",
  },
  {
    id: 2,
    name: "2. What is the EB3 Unskilled Visa?",
    content:
      "a. A foreign national can obtain the EB-3 Unskilled Visa by either (1) adjusting their status in the United States from a student visa or other type of visa to the EB-3 Visa or (2) applying overseas to be interviewed at a local U.S. Embassy or Consulate. Check out our extensive videos that explain the process by creating a free account.",
  },
  {
    id: 3,
    name: "3. How can I get in contact with you?",
    content: "a. Sign up for free and send us a message.",
  },
  {
    id: 4,
    name: "4. Can I change my nonimmigrant visa status to EB3 visa?",
    content:
      "a. Yes. You can determine your eligibility by signing up for free. We can help F-1, F-2, E-2, H1B, H4, L, J, M visa holders and more.",
  },
  {
    id: 5,
    name: "5. Can I apply on Asylum?",
    content:
      "a. Yes, those who have TPS status who entered the country authorized (via a visa for example) can adjust status. TPS is a temporary immigration status provided to nationals of certain countries experiencing problems. If a foreign national entered the country with a visa or “with inspection” and then received TPS, they may adjust their status (“AOS”).",
  },
];

const Questions = ({ name, content }) => {
  return (
    <Box
      mx="auto"
      rounded="lg"
      _dark={{
        bg: "gray.800",
      }}
    >
      <Box p={6}>
        <Box>
          <chakra.h1
            maxW={"full"}
            display="block"
            color="blue.600"
            _dark={{
              color: "white",
            }}
            fontWeight="bold"
            fontSize="large"
            alignItems={"start"}
            mt={2}
          >
            {name}
          </chakra.h1>
          <chakra.p
            mt={2}
            fontSize="sm"
            color="black"
            _dark={{
              color: "gray.400",
            }}
          >
            {content}
          </chakra.p>
        </Box>
      </Box>
    </Box>
  );
};

const Page3 = () => {
  return (
    <Flex
      _dark={{
        bg: "#3e3e3e",
      }}
      p={50}
      mt={100}
      w="full"
      flexDirection={"column"}
    >
      <Stack color={"orange.400"} spacing={4}>
        <Heading
          fontWeight={"bold"}
          fontSize={useBreakpointValue({ base: "4xl", md: "5xl" })}
          lineHeight={"100%"}
        >
          Frequently Asked Questions
        </Heading>
      </Stack>

      <Box spacing={"5"} m={5}>
        {questionsContent.map((questionsDetails, id) => (
          <Questions {...questionsDetails} key={id} />
        ))}
      </Box>
    </Flex>
  );
};

export default Page3;
