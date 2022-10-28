import { Flex, Box, chakra } from "@chakra-ui/react";
import about__team1 from "../../../Assets/Images/a_about__team1.png";

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
          <img src={about__team1} alt="" />
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
            Our team is the best in the industry!
          </chakra.h2>
          <chakra.p
            mt={4}
            color="gray.800"
            _dark={{
              color: "gray.400",
            }}
          >
            Our team includes immigration attorneys, highly experienced
            immigration consultants, and even U.S. immigrants. <br />
            Your EB-3 Unskilled Visa experts.
          </chakra.p>
        </Flex>
      </Box>
    </Flex>
  );
}
