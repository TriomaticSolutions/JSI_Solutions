import { Button, Box, chakra, Flex } from "@chakra-ui/react";
import success__caseStudy1 from "../../../Assets/Images/success__caseStudy1.png";

export default function Page6() {
  return (
    <Flex
      bg="white"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
      mt={100}
    >
      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        maxW={{ lg: "6xl" }}
        rounded={{ lg: "lg" }}
      >
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
              backgroundImage: `url(${success__caseStudy1})`,
            }}
          ></Box>
        </Box>

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
            Case Studies
          </chakra.h2>
          <chakra.p
            mt={4}
            color="black"
            _dark={{
              color: "gray.400",
            }}
          >
            Our case studies highlight many different experiences our clients
            have had over the years!
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
      </Box>
    </Flex>
  );
}
