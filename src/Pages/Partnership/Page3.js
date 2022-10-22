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
      <StatNumber py={"3"} fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
      <StatLabel fontWeight={"medium"} pb={"5"} mb={2} isTruncated>
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
          stat={"Industries"}
          title={
            "We have worked in QSR, Manufacturing, Packing, Janitorial Services, Warehousing, and Food Prep/Dishwashing.  "
          }
        />
        <StatsCard
          stat={"Labor Solutions"}
          title={
            "Labor shortages are expensive. Our labor pool will help fill your open positions and increase your retention rate."
          }
        />
        <StatsCard
          stat={"Cost"}
          title={
            "We have NO recurring fees for employers that we work with. There is a one time nominal fee for the entire process and support throughout."
          }
        />
      </SimpleGrid>
    </Box>
  );
}
