import about__expertise1 from "../../../Assets/Images/about__expertise1.jpeg";
import { Box, Button, chakra, Flex } from "@chakra-ui/react";

export default function Page5() {
  return (
    <Flex
      bg="white"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={50}
      mt={100}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="white"
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
            color="orange.400"
            _dark={{
              color: "white",
            }}
            fontWeight="bold"
          >
            Our Expertise
          </chakra.h2>
          <chakra.p
            mt={4}
            color="gray.700"
            _dark={{
              color: "gray.400",
            }}
          >
            Our goal is the same as our clients: for them to receive their U.S.
            Green Card through the EB-3 Unskilled Visa program.
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
              Determine your eligibility
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
              backgroundImage: `url(${about__expertise1})`,
            }}
          ></Box>
        </Box>
      </Box>
    </Flex>
  );
}
