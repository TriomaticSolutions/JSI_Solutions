import { Box, Button, Flex, Heading, Text, chakra } from "@chakra-ui/react";
import a_main5 from "../../Assets/Images/a_main5.png";

export default function SplitScreen() {
  return (
    <Flex
      bg="white"
      _dark={{
        bg: "#3e3e3e",
      }}
      py={50}
      w="full"
      flexDirection={"column"}
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        maxW={"1xl"}
        fontWeight={500}
        fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
        color={"#002b3d"}
        mb={8}
        textAlign={"center"}
      >
        The 1st step in Achieving your American Dream. <br />
        <Text
          textAlign={"center"}
          as={"span"}
          color={"gray.800"}
          style={{
            fontSize: "16px",
            fontWeight: "normal",
          }}
        >
          For over a decade, thousands of immigrants have trusted BDV Solutions
          to help them achieve their American dream.
        </Text>
      </Heading>

      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        mx={{ lg: 4 }}
        display={{ lg: "flex" }}
        maxW={{ lg: "7xl" }}
        rounded={{ lg: "lg" }}
      >
        <Flex
          py={12}
          px={6}
          maxW={{
            base: "full",
            lg: "5xl",
            sm: "full",
          }}
          w={{
            lg: "50%",
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
            Freelance Unmatched Opportunity
          </chakra.h2>
          <chakra.p
            mt={4}
            color="gray.800"
            _dark={{
              color: "gray.400",
            }}
          >
            BDV Solutions is the largest immigration agency in the world focused
            on the EB-3 Unskilled Visa. We offer the widest range of EB-3 job
            opportunities and locations around the company. The EB-3 Unskilled
            Visa was established by the U.S. Government in 1990 through the
            Immigration and Nationality Act.
          </chakra.p>

          <Box mt={8}>
            <Button
              bg="orange.400"
              color="white"
              px={5}
              py={3}
              fontWeight="semibold"
              rounded="lg"
              _hover={{
                bg: "gray.800",
              }}
            >
              Learn more
            </Button>
          </Box>
        </Flex>

        <Box>
          <img src={a_main5} alt="" />
        </Box>
      </Box>

      <Heading
        lineHeight={"90%"}
        maxW={"1xl"}
        textAlign={"center"}
        mt={8}
        fontWeight={500}
        fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
        color={"#002b3d"}
      >
        We can help you from wherever you are around the world. <br />
        <Text
          textAlign={"center"}
          as={"span"}
          color={"gray.800"}
          style={{
            fontSize: "16px",
            fontWeight: "normal",
          }}
        >
          Whether you have never been to the United States or if you are
          currently in the United States on a current non-immigrant visa, we can
          help you reach your goal of U.S. permanent residency. We have helped
          people from 106 countries!
        </Text>
      </Heading>
    </Flex>
  );
}
