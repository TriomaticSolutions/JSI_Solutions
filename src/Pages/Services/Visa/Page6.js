import { Flex, Button, Box, chakra } from "@chakra-ui/react";

export default function WithBackgroundImage() {
  return (
    <Flex
      bg="white"
      _dark={{
        bg: "#3e3e3e",
      }}
      py={16}
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
          py={12}
          px={6}
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
            Why does this process work?
          </chakra.h2>

          <chakra.p
            mt={4}
            color="gray.800"
            _dark={{
              color: "gray.400",
            }}
          >
            More employers than ever are struggling to find applicants for their
            unskilled positions. Industries like janitorial, restaurants,
            packing and warehousing have been hit hardest. Rather than closing
            their doors, many employers have looked for creative solutions to
            staff their businesses. One option that many employers have found
            advantageous is pursuing sponsorships of prospective immigrants who
            are willing to fill openings with the help of an EB-3 unskilled
            visa.
            <br />
            <br />
            The Immigration Act of 1990 created an Employment Based Visa program
            that has allowed US businesses to sponsor foreign nationals willing
            and qualified to work. There are five categories of EB visas, the
            first two of which require skilled labor and extensive education,
            and part of third of which (the EB-3 visa) targets workers who can
            perform unskilled labor for their future employers.
            <br />
            <br />
            The EB-3 "Other Worker" Visa process leads directly to U.S.
            permanent residency with more favorable conditions than most routes
            available in immigration law today!
          </chakra.p>

          <Box mt={8}>
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
              Check our stories
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
