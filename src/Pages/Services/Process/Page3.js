import { Flex, Box, chakra } from "@chakra-ui/react";

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
            Our Services
          </chakra.h2>

          <chakra.p
            mt={4}
            color="gray.800"
            _dark={{
              color: "gray.400",
            }}
          >
            We will be with you throughout the entirety of your visa case and
            supporting you along the way in each stage of the process. Our team
            starts our work before you even become our client in finding,
            vetting, and preparing employers to sponsor you for the EB-3
            Unskilled Green Card and ends after you get your Green Card approved
            by assisting you in your transition to work and supporting you
            throughout your employment.
          </chakra.p>
        </Flex>
      </Box>
    </Flex>
  );
}
