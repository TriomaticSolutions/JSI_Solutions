import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export default function SplitScreen() {
  return (
    <div
      style={{
        margin: "50px 0px 50px 0px",
        textAlign: "center",
      }}
    >
      <Heading
        maxW={"1xl"}
        fontWeight={500}
        fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
        lineHeight={"100%"}
        mb={8}
        color="#002b3d"
      >
        The 1st step in Achieving your American Dream. <br />
        <Text
          as={"span"}
          color={"gray.800"}
          style={{
            fontSize: "19px",
            fontWeight: "normal",
          }}
        >
          For over a decade, thousands of immigrants have trusted BDV Solutions
          to help them achieve their American dream.
        </Text>
      </Heading>

      <Stack direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"} textAlign={"start"}>
            <Heading fontSize={{ base: "1xl", md: "2xl", lg: "3xl" }}>
              <Text as={"span"} position={"relative"} textAlign={"start"}>
                Freelance Unmatched Opportunity
              </Text>{" "}
            </Heading>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              color={"gray.500"}
              textAlign={"start"}
            >
              BDV Solutions is the largest immigration agency in the world
              focused on the EB-3 Unskilled Visa. We offer the widest range of
              EB-3 job opportunities and locations around the company. The EB-3
              Unskilled Visa was established by the U.S. Government in 1990
              through the Immigration and Nationality Act.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Learn more
              </Button>
            </Stack>
          </Stack>
        </Flex>

        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
          />
        </Flex>
      </Stack>

      <Heading
        maxW={"1xl"}
        pr={"3rem"}
        pl={"3rem"}
        fontWeight={500}
        fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
        lineHeight={"100%"}
        mt={8}
      >
        We can help you from wherever you are around the world. <br />
        <Text
          as={"span"}
          color={"gray.500"}
          style={{
            fontSize: "19px",
            fontWeight: "normal",
          }}
        >
          Whether you have never been to the United States or if you are
          currently in the United States on a current non-immigrant visa, we can
          help you reach your goal of U.S. permanent residency. We have helped
          people from 106 countries!
        </Text>
      </Heading>
    </div>
  );
}
