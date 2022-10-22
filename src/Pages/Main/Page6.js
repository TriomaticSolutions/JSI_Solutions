import { Box, chakra, Link, Flex, Button } from "@chakra-ui/react";
import main4 from "../../Assets/Images/main4.png";

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
              backgroundImage: `url(${main4})`,
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
            color="gray.800"
            _dark={{
              color: "white",
            }}
            fontWeight="bold"
          >
            Preparing for a visa interview?
          </chakra.h2>
          <chakra.p
            mt={4}
            color="gray.600"
            _dark={{
              color: "gray.400",
            }}
          >
            Our partner, Argo Visa, can help you prepare for your U.S. visa
            interview with USCIS or at your Consulate or Embassy. Argo Visa's
            consultants are all former Visa Officers who have collectively made
            over 1,000,000 decisions on U.S. visas.
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
