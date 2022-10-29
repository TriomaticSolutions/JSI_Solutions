import { Box, chakra, Flex } from "@chakra-ui/react";

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
            Longstanding Success
          </chakra.h2>

          <chakra.p
            mt={4}
            color="gray.800"
            _dark={{
              color: "gray.400",
            }}
          >
            The US Government has created a visa for people who are seeking
            employment in unskilled positions. This is the EB-3 'Other Workers'
            Visa and it allows US employers to sponsor foreign national in jobs
            that are experiencing a chronic labor shortage.
            <br /> <br />
            Each year, the U.S. government allocates 10,000 visas for unskilled
            positions For many, the most difficult part of the process is
            finding an employer able and willing to sponsor them. BDV Solutions
            partners with qualified employers who are ready to sponsor foreign
            nationals.
            <br /> <br />
            The EB-3 'Other Workers' Visa is a great opportunity for you to gain
            permanent residence to the United States and may be obtained by
            adjusting your status or through consular processing from your home
            country. If applicable, your spouse and unmarried children under 21
            are eligible too!
          </chakra.p>
        </Flex>
      </Box>
    </Flex>
  );
}
