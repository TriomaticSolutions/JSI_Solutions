import {
  Flex,
  chakra,
  Box,
  Button,
  Stack,
  Checkbox,
  Textarea,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import React, { useState } from "react";

const questions = [
  {
    id: 1,
    no: 1,
    heading:
      "Have you ever before applied for permanent resident status in the U.S. (this refers exclusively to the I-485 Adjustment of Status Application within the United States or application for Immigrant Visa at the U.S. Consulate Abroad)?",
  },
  {
    id: 2,
    no: 2,
    heading:
      "Are you presently or have you ever been in U.S. removal or deportation proceedings? If yes, please attach documentation.",
  },
  {
    id: 3,
    no: 3,
    heading:
      "Have you ever been a J-1 / J-2 visa nonimmigrant exchange visitor?",
  },
  {
    id: 4,
    no: 4,
    heading:
      "If you previously held J status, were you subject to the 212E two-year foreign residence requirement? Your J visa should say 'Bearer is / is not subject to 212E. (Select 'no' if you have never held J status)",
  },
  {
    id: 5,
    no: 5,
    heading:
      "If you are / were subject to J 2-year foreign residence requirement, have you satisfied the requirement by either living in home country for 2 years after J or obtaining J waiver? (Select 'no' if you never had J visa status)",
  },
  {
    id: 6,
    no: 6,
    heading:
      "Have you ever been convicted of a crime, including both misdemeanor and / or felony? If you have a criminal record, this could impact your ability to get the green card. If yes, please upload documentation for further review.",
  },
  {
    id: 7,
    no: 7,
    heading: "Have you ever been deported or removed from the United States?",
  },
  {
    id: 8,
    no: 8,
    heading:
      "Have you worked in the United States without authorization for MORE than 180 days since your last entry into the U.S.?",
  },
  {
    id: 9,
    no: 9,
    heading:
      "Have you been unlawfully present in the United States for MORE than 180 days since your last entry in the U.S.? (Unlawful presence starts on date your I-94 expired, if you did not timely file an extension application).",
  },
  {
    id: 10,
    no: 10,
    heading: "Do you have a pending U.S. asylum application?",
  },
];

const Cards = ({ heading, no }) => {
  const [compareBool, setCompareBool] = useState(false);

  return (
    <Flex flexDirection={"column"} boxShadow={"lg"} px={6} py={4}>
      <chakra.span fontSize={"2xl"} fontWeight={"extrabold"} pr={2}>
        {no}.
      </chakra.span>
      <chakra.span
        color="gray.800"
        _dark={{
          color: "gray.400",
        }}
      >
        {heading}
      </chakra.span>

      <RadioGroup my={2}>
        <Stack spacing={5} direction="row">
          <div onClick={() => setCompareBool(true)}>
            <Radio colorScheme="green" value="1">
              Yes
            </Radio>
          </div>

          <div onClick={() => setCompareBool(false)}>
            <Radio colorScheme="red" value="2">
              No
            </Radio>
          </div>
        </Stack>
      </RadioGroup>

      {compareBool && (
        <Stack spacing={3}>
          <Textarea
            isInvalid
            errorBorderColor="crimson"
            placeholder="Please elaborate on any details you consider necessary"
          />
        </Stack>
      )}
    </Flex>
  );
};

function Page1() {
  return (
    <Flex
      bg="white"
      _dark={{
        bg: "#3e3e3e",
      }}
      py={6}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        _dark={{ bg: "#3e3e3e" }}
        mx={{ lg: 4 }}
        display={{ lg: "flex" }}
        flexDirection={"column"}
        maxW={{ lg: "7xl" }}
        rounded={{ lg: "lg" }}
      >
        <Flex
          py={4}
          px={4}
          maxW={{
            base: "full",
            lg: "5xl",
            sm: "full",
          }}
          justifyContent="center"
          flexDirection={"column"}
        >
          <chakra.h2
            fontSize={{
              sm: "2xl",
              base: "1xl",
              md: "3xl",
            }}
            color="#002b3d"
            _dark={{
              color: "white",
            }}
            fontWeight="bold"
          >
            Please answer all questions below to better understand what your
            needs are.
          </chakra.h2>

          {questions.map((questionInfo, id) => (
            <Cards key={id} {...questionInfo} />
          ))}
        </Flex>
      </Box>
      {/* <Box mt={8}>
        <Button
          bg="orange.400"
          color="white"
          display={"block"}
          px={5}
          py={3}
          fontWeight="semibold"
          rounded="lg"
          _hover={{
            bg: "#002b3d",
          }}
        >
          Let's go
        </Button>
      </Box> */}
    </Flex>
  );
}

export default Page1;
