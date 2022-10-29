import {
  Box,
  chakra,
  Icon,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import StarIcon from "@mui/icons-material/Star";

function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 2, md: 2 }}
      py={"2"}
      shadow={"xl"}
      border={"2px solid"}
      rounded={"lg"}
    >
      <Icon as={title} />
      <StatNumber color={"#4299e1"} fontSize={"sm"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function BasicStatistics() {
  return (
    <Box
      maxW="4xl"
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
        fontSize={"3xl"}
        fontWeight={"bold"}
      >
        Why work with an agency?
      </chakra.h1>

      <chakra.h3 textAlign={"center"} mb={5} fontSize={"1xl"}>
        There are many benefits to working with an experienced agency:
      </chakra.h3>
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 4, lg: 3 }}>
        <StatsCard stat={"Proven track record"} title={StarIcon} />
        <StatsCard stat={"Many qualified job options"} title={StarIcon} />
        <StatsCard stat={"Case management services"} title={StarIcon} />
        <StatsCard stat={"Attorney pairing"} title={StarIcon} />
        <StatsCard stat={"Government connections"} title={StarIcon} />
        <StatsCard stat={"Employer sourcing"} title={StarIcon} />
        <StatsCard stat={"Community of applicants"} title={StarIcon} />
        <StatsCard stat={"Relocation services"} title={StarIcon} />
      </SimpleGrid>
    </Box>
  );
}
