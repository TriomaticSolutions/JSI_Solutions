import { Box, Button, chakra, Flex } from "@chakra-ui/react";
import a_main3 from "../../Assets/Images/a_main3.png";

export default function Page5() {
  return (
    <Flex
      bg="#002b3d"
      _dark={{
        bg: "#3e3e3e",
      }}
      py={50}
      w="full"
      alignItems="center"
      justifyContent="center"
      bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
    >
      <Box
        _dark={{ bg: "#3e3e3e" }}
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
            color="orange.400"
            _dark={{
              color: "white",
            }}
            fontWeight="bold"
          >
            What you need to know about the employment based Green Card program
          </chakra.h2>

          <chakra.p
            mt={4}
            color="white"
            _dark={{
              color: "gray.400",
            }}
          >
            The Employment-Based Green Card program has multiple different
            paths. BDV Solutions has helped thousands of people start their
            immigration journey through this program.
          </chakra.p>

          <Box mt={8}>
            <Button
              bg="blue.400"
              color="white"
              px={5}
              py={3}
              fontWeight="semibold"
              rounded="lg"
              _hover={{
                bg: "orange.400",
              }}
            >
              Check it now
            </Button>
          </Box>
        </Flex>

        <Box>
          <img src={a_main3} alt="" />
        </Box>
      </Box>
    </Flex>
  );
}
