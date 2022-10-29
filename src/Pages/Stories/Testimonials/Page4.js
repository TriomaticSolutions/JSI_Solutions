import {
  Flex, Box, chakra,
  Button,
} from "@chakra-ui/react";

export default function CallToActionWithIllustration() {
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
            Case Studies
          </chakra.h2>

          <chakra.p
            mt={4}
            color="gray.800"
            _dark={{
              color: "gray.400",
            }}
          >
            What does a normal EB3 Unskilled process look like? Every single
            person has a different timeline and experience in this process.
            Check out our testimonials to get an idea of the range of timelines
            and experiences our clients have.
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
              Read case studies
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}


