import { Box, Button, chakra, Flex, Link } from "@chakra-ui/react";
import main3 from "../../Assets/Images/main3.png";

export default function Page5() {
  return (
    <Flex
      bg="#19455e"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="#19455e"
        _dark={{ bg: "gray.800" }}
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        maxW={{ lg: "5xl" }}
        rounded={{ lg: "lg" }}
      >
        <Box
          py={12}
          px={6}
          maxW={{
            base: "xl",
            lg: "5xl",
          }}
          w={{
            lg: "50%",
          }}
        >
          <chakra.h2
            fontSize={{
              base: "2xl",
              md: "3xl",
            }}
            color="gray.200"
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
              bg="gray.900"
              color="gray.100"
              px={5}
              py={3}
              fontWeight="semibold"
              rounded="lg"
              _hover={{
                bg: "gray.800",
              }}
            >
              Check it now
            </Button>
          </Box>
        </Box>

        <Box
          w={{
            lg: "50%",
          }}
        >
          <Box
            h={{
              base: 64,
              lg: "full",
            }}
            rounded={{
              lg: "lg",
            }}
            bgSize="cover"
            style={{
              backgroundImage: `url(${main3})`,
            }}
          ></Box>
        </Box>
      </Box>
    </Flex>
  );
}
