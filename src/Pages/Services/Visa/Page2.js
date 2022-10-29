import { Flex, Box, chakra } from "@chakra-ui/react";

export default function WithBackgroundImage() {
  return (
    <Flex
      bg="#005287"
      _dark={{
        bg: "#3e3e3e",
      }}
      py={16}
      w="full"
      alignItems="center"
      justifyContent="center"
      bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
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
            color="orange.400"
            _dark={{
              color: "white",
            }}
            fontWeight="bold"
          >
            Timeline of the Process
          </chakra.h2>

          <chakra.p
            mt={4}
            color="white"
            _dark={{
              color: "gray.400",
            }}
          >
            There are 5 unique phases of the EB-3 Unskilled Visa process, ending
            in the issuance of a U.S. Green Card. The EB-3 Unskilled Visa
            process leads many applicants with a range of backgrounds to a U.S.
            Green Card.
          </chakra.p>

          <chakra.p
            mt={4}
            color="white"
            _dark={{
              color: "gray.400",
            }}
          >
            <span
              style={{
                color: "#99E49D",
                fontSize: "30px",
                paddingRight: "5px",
              }}
            >
              1.
            </span>{" "}
            Find an employer to sponsor you <br />
            <span
              style={{
                color: "#99E49D",
                fontSize: "30px",
                paddingRight: "5px",
              }}
            >
              2.
            </span>{" "}
            File and apply for the process <br />
            <span
              style={{
                color: "#99E49D",
                fontSize: "30px",
                paddingRight: "5px",
              }}
            >
              3.
            </span>{" "}
            Get Green Card or work authorization <br />
            <span
              style={{
                color: "#99E49D",
                fontSize: "30px",
                paddingRight: "5px",
              }}
            >
              4.
            </span>{" "}
            Start working for your employer <br />
            <span
              style={{
                color: "#99E49D",
                fontSize: "30px",
                paddingRight: "5px",
              }}
            >
              5.
            </span>{" "}
            Start living your American Dream
            <br />
          </chakra.p>
        </Flex>
      </Box>
    </Flex>
  );
}
