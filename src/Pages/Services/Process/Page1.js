import services__process1 from "../../../Assets/Images/a_services__process1.png";
import { Flex, Box, chakra, Button } from "@chakra-ui/react";

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
          <img src={services__process1} alt="" />
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
            Our Service
          </chakra.h2>
          <chakra.p
            mt={4}
            color="gray.800"
            _dark={{
              color: "gray.400",
            }}
          >
            At BDV Solutions we are here with you from sourcing and vetting
            employers to the day you get your green card and beyond.
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
              Learn more
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
