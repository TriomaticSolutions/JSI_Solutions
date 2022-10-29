import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"2px solid"}
      borderColor={useColorModeValue("#002b3d", "blue.500")}
      rounded={"lg"}
    >
      <StatLabel fontWeight={"medium"} mb={2} isTruncated>
        {title}
      </StatLabel>
      <StatNumber color={"#4299e1"} fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function BasicStatistics() {
  return (
    <Box
      maxW="7xl"
      py={10}
      my={10}
      mx={"auto"}
      pt={5}
      px={{ base: 2, sm: 12, md: 17 }}
      textAlign={"center"}
    >
      <chakra.h1
        color={"#002b3d"}
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        EB-3 Unskilled Visa Process
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          stat={"Historic Success"}
          title={
            "The EB-3 Unskilled Visa program was established in 1990 through the Immigration and Nationality Act.e"
          }
        />
        <StatsCard
          stat={"Opportunity Awaits"}
          title={
            "Anyone is eligible for this program. There are no skill or degree requirements to apply."
          }
        />
        <StatsCard
          stat={"Versatile Process"}
          title={
            "You can do this process from your current country of residence or within the United States."
          }
        />
      </SimpleGrid>
    </Box>
  );
}
