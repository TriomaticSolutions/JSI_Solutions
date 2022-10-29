import { Button, Flex, chakra, Box } from "@chakra-ui/react";

export default function CallToActionWithIllustration() {
  return (
    <Flex
      bg="#005287"
      _dark={{
        bg: "#3e3e3e",
      }}
      py={16}
      w="full"
      alignItems="center"
      justifyContent="center"
      bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
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
            color="orange.400"
            _dark={{
              color: "white",
            }}
            fontWeight="bold"
          >
            Check out our blog
          </chakra.h2>

          <chakra.p
            mt={4}
            color="white"
            _dark={{
              color: "gray.400",
            }}
          >
            Read more about particular EB-3 topics and BDV Solutions on our
            blog.
          </chakra.p>

          <Box mt={8}>
            <Button
              bg="blue.400"
              color="white"
              display={"block"}
              px={5}
              py={3}
              fontWeight="semibold"
              rounded="lg"
              _hover={{
                bg: "orange.400",
              }}
            >
              Check out
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
