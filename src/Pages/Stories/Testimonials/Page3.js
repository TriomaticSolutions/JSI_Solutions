import {
  Box,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

function StatsCard(props) {
  const { title, stat, name } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"2px solid"}
      borderColor={useColorModeValue("#002b3d", "blue.500")}
      rounded={"lg"}
    >
      <StatNumber
        textAlign={"start"}
        fontSize={"1x1"}
        color={"#008df2"}
        fontWeight={"bold"}
      >
        {stat}
      </StatNumber>
      <StatNumber
        textAlign={"start"}
        fontSize={"2xl"}
        color={"gray.700"}
        fontWeight={"bold"}
      >
        {name}
      </StatNumber>
      <StatLabel textAlign={"start"} fontWeight={"medium"} mb={2} isTruncated>
        {title}
      </StatLabel>
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
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          name={"Person 1"}
          stat={"Country 1"}
          title={
            "My experience was very positive with BDV Solutions as they were there every step of the way when I needed them, and answered all of my burning questions, shout out to Mitchel Saum for being so patient and helpful."
          }
        />
        <StatsCard
          name={"Person 2"}
          stat={"Country 2"}
          title={
            "My experience was very positive with BDV Solutions as they were there every step of the way when I needed them, and answered all of my burning questions, shout out to Mitchel Saum for being so patient and helpful."
          }
        />
        <StatsCard
          name={"Person 3"}
          stat={"Country 3"}
          title={
            "My experience was very positive with BDV Solutions as they were there every step of the way when I needed them, and answered all of my burning questions, shout out to Mitchel Saum for being so patient and helpful."
          }
        />
      </SimpleGrid>
    </Box>
  );
}
