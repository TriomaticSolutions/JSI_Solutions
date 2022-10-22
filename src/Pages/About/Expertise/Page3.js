import { Button, Box, chakra, SimpleGrid, Flex } from "@chakra-ui/react";

export default function Page5() {
  return (
    <div
      style={{
        padding: "15px 0px 40px 0px",
        margin: "100px 0px 25px 0px",
      }}
    >
      <Box
        _dark={{
          bg: "gray.900",
        }}
        m={"auto"}
        maxW={"4xl"}
      >
        <Flex
          alignItems="start"
          columns={{
            base: 1,
            md: 2,
          }}
          spacingY={{
            base: 10,
            md: 32,
          }}
          spacingX={{
            base: 10,
            md: 24,
          }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{
                base: "2xl",
                md: "4xl",
              }}
              fontWeight="bold"
              textAlign={{
                base: "center",
                md: "left",
              }}
              color="orange.400"
              _dark={{
                color: "gray.400",
              }}
            >
              Successful EB-3 Cases with BDV Solutions
            </chakra.h2>

            <chakra.p
              mb={5}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="gray.700"
              _dark={{
                color: "gray.400",
              }}
              fontSize={{
                md: "sm",
              }}
            >
              We have had many successful cases over the years. BDV Solutions
              has published case studies on some of our clients' cases in order
              to highlight the various experiences of someone going through this
              process. Each person going through this process will have a unique
              timeline and process.
            </chakra.p>

            <Button
              w={{
                base: "full",
                sm: "auto",
              }}
              size="lg"
              bg="gray.700"
              _dark={{
                bg: "gray.700",
              }}
              _hover={{
                bg: "gray.700",
                _dark: {
                  bg: "gray.600",
                },
              }}
              color="gray.100"
              as="a"
            >
              Determine your eligibility
            </Button>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
