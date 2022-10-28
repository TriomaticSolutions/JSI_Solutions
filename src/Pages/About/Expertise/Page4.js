import { Button, Box, Flex, chakra } from "@chakra-ui/react";

export default function CallToActionWithIllustration() {
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
            History of BDV Solutions
          </chakra.h2>

          <chakra.p
            mt={4}
            color="gray.800"
            _dark={{
              color: "gray.400",
            }}
          >
            BDV Solutions, LLC ("BDV") is the largest independent third party
            provider of EB-3 employee sponsor consulting and case management
            services in the U.S., focusing on unskilled (entry level) labor
            solutions for U.S. businesses. BDV works with the top immigration
            law firms to assist non-immigrant visa holders adjust their visa
            status in the U.S. from an eligible non-immigrant visa to EB-3
            permanent residency Green Card and foreign nationals living outside
            of the U.S. through Consulate Process.
            <br />
            <br />
            BDV was founded by CEO, Britt Davis Vergnolle in 2011, following a
            series of successful international businesses. She is joined by
            highly experienced team including Chris Richardson, Nhu-Y Le, Holly
            Lee, and more. Richardson is a practicing immigration attorney with
            a distinguished career as a U.S. diplomat and he is a frequent
            contributor to a number of publications including The New York
            Times, CNN, and NPR. In addition, award winning and nationally
            recognized CFO, Holly Lee, is on the team. Nhu-Y Le is a licensed
            immigration attorney with prior experiences at Microsoft, Fragomen,
            and LegalPad.
            <br />
            <br />
            BDV Solutions received an investment from Astara Capital in November
            2021, which has only legitimized this ever growing EB3 Unskilled
            Visa process. BDV Solutions also works with an established
            government relations team that includes support from Leon Rodriguez,
            former Director of USCIS, David Wilkins, former U.S. ambassador to
            China, as well as a host of other former U.S. diplomats and federal
            government officials.
            <br />
            The entire BDV Solutions Team brings unique experiences from all
            corners of the globe (truly).
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
              Determine your eligibility
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
