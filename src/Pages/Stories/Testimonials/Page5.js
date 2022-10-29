import { Flex, Box, chakra, Button } from "@chakra-ui/react";

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
            Is this process right for you?
          </chakra.h2>
          <chakra.h4
            fontSize={{
              sm: "2xl",
              base: "1xl",
              md: "3xl",
            }}
            color="blue.400"
            _dark={{
              color: "white",
            }}
            fontWeight="bold"
          >
            Will this process work for your situation?
          </chakra.h4>

          <chakra.p
            mt={4}
            color="white"
            _dark={{
              color: "gray.400",
            }}
          >
            Once you create an account here, you can set up a free introductory
            call with one of our employees who will discuss your case with you
            and help you evaluate if this program is right for you.
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
              Book your free call
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
