import { Box, chakra, Flex, Button } from "@chakra-ui/react";
import a_main4 from "../../Assets/Images/a_main4.png";

export default function Page6() {
  return (
    <Flex
      bg="white"
      _dark={{
        bg: "#3e3e3e",
      }}
      py={50}
      m={"auto"}
      w="full"
      flexDirection={"column"}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        mx={{ lg: 4 }}
        display={{ lg: "flex" }}
        maxW={{ lg: "7xl" }}
        rounded={{ lg: "lg" }}
      >
        <Box>
          <img src={a_main4} alt="" />
        </Box>

        <Flex
          py={12}
          px={6}
          maxW={{
            lg: "5xl",
            base: "full",
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
            color="#002b3d"
            _dark={{
              color: "white",
            }}
            fontWeight="bold"
          >
            Preparing for a visa interview?
          </chakra.h2>
          <chakra.p
            mt={4}
            color="gray.800"
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
              bg="orange.400"
              color="white"
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
        </Flex>
      </Box>
    </Flex>
  );
}
