import { Box, Flex, chakra } from "@chakra-ui/react";

export default function SplitScreen() {
  return (
    <Flex
      bg="white"
      _dark={{
        bg: "#3e3e3e",
      }}
      py={4}
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
        <Flex
          py={6}
          px={6}
          boxShadow={"lg"}
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
            color="#002b3d"
            _dark={{
              color: "white",
            }}
            fontWeight="bold"
          >
            About EB3 visa
          </chakra.h2>
          <chakra.p
            mt={4}
            color="gray.800"
            _dark={{
              color: "gray.400",
            }}
          >
            The EB-3 Visa program was created in 1990. In order to find
            employees for hard-to fill jobs, US Congress set aside 10,000 visas
            per year for full-time jobs that required no skills or experience.
            <br />
            <br />
            A foreign national can obtain this permanent Green Card by either 1)
            Adjusting their current status from a student visa for example or 2)
            Applying overseas and being interviewed at local US Embassy through
            Consular Processing.
            <br />
            <br />
            Complete the onboarding process by providing some simple information
            and watching the onboarding webinar to learn about the program, the
            jobs we have available right now and the fees.
          </chakra.p>
        </Flex>

        {/* <Box>
          <img src={a_main5} alt="" />
        </Box> */}
      </Box>
    </Flex>
  );
}
