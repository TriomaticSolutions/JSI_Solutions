import a_expertise1 from "../../../Assets/Images/a_expertise1.png";
import { Box, Button, chakra, Flex } from "@chakra-ui/react";

export default function Page5() {
  return (
    <Flex
      bg="white"
      _dark={{
        bg: "#3e3e3e",
      }}
      py={50}
      mt={100}
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
          <img src={a_expertise1} alt="" />
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
            Our Expertise
          </chakra.h2>
          <chakra.p
            mt={4}
            color="gray.800"
            _dark={{
              color: "gray.400",
            }}
          >
            Our goal is the same as our clients: for them to receive their U.S.
            Green Card through the EB-3 Unskilled Visa program.
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
              Determine your eligibility
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
