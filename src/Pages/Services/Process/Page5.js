import { Flex, Button, chakra, Box } from "@chakra-ui/react";

export default function WithBackgroundImage() {
  return (
    <Flex
      bg="white"
      _dark={{
        bg: "#3e3e3e",
      }}
      py={16}
      w="full"
      alignItems="center"
      justifyContent="center"
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
            color="#002b3d"
            _dark={{
              color: "white",
            }}
            fontWeight="bold"
          >
            Our Employers
          </chakra.h2>

          <chakra.p
            mt={4}
            color="gray.800"
            _dark={{
              color: "gray.400",
            }}
          >
            Part of our process includes finding and vetting employers who will
            sponsor you for the EB3 Unskilled Green Card. One of the most
            difficult part of this process if finding an employer who can and
            will sponsor you for your immigrant visa petition.
            <br />
            You can learn more about our employers here. And you can see all of
            our current employer sponsors in the job pool when you create a free
            account here.
          </chakra.p>

          <Box mt={8}>
            <Button
              bg="orange.400"
              color="white"
              display={"block"}
              px={5}
              py={3}
              fontWeight="semibold"
              rounded="lg"
              _hover={{
                bg: "#002b3d",
              }}
            >
              Explore the employeers options
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
