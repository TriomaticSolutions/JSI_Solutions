import { Box, Flex, Image, chakra, useColorModeValue } from "@chakra-ui/react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GavelIcon from "@mui/icons-material/Gavel";
import FlagIcon from "@mui/icons-material/Flag";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import male__avatar from "../../../Assets/Images/male__avatar.png";

const persons = [
  {
    id: 1,
    img: male__avatar,
    name: "Person 1",
    content: "Field 1",
  },
  {
    id: 2,
    img: male__avatar,
    name: "Person 2",
    content: "Field 2",
  },
  {
    id: 3,
    img: male__avatar,
    name: "Person 3",
    content: "Field 3",
  },
  {
    id: 4,
    img: male__avatar,
    name: "Person 4",
    content: "Field 4",
  },
  {
    id: 5,
    img: male__avatar,
    name: "Person 5",
    content: "Field 5",
  },
  {
    id: 6,
    img: male__avatar,
    name: "Person 6",
    content: "Field 6",
  },
  {
    id: 7,
    img: male__avatar,
    name: "Person 7",
    content: "Field 7",
  },
  {
    id: 8,
    img: male__avatar,
    name: "Person 8",
    content: "Field 8",
  },
];

const PersonCard = ({ id, img, name, content }) => {
  return (
    <Box
      w="300px"
      shadow="lg"
      justifyContent={"space-between"}
      rounded="lg"
      overflow="hidden"
      m="25px"
      key={id}
    >
      <Image src={img} fit="cover" alt="avatar" />

      <Box py={5} textAlign="center">
        <chakra.h6
          display="block"
          fontSize="1xl"
          color="gray.800"
          fontWeight="bold"
        >
          {name}
        </chakra.h6>

        <chakra.span fontSize="sm" color="gray.700">
          {content}
        </chakra.span>
      </Box>
    </Box>
  );
};

export default function Page2() {
  return (
    <Flex
      _dark={{
        bg: "#3e3e3e",
      }}
      p={50}
      m={"auto"}
      w="full"
      direction={"column"}
      maxW={"7xl"}
    >
      <Box margin={"auto"}>
        <chakra.h1
          py={5}
          fontSize={48}
          fontWeight={"bold"}
          color={useColorModeValue("gray.700", "gray.50")}
        >
          Get to know the BDV Solutions team
        </chakra.h1>
      </Box>

      <Flex justifyContent={"center"} flexWrap={"wrap"}>
        {persons.map(({ content, id, img, name }) => (
          <PersonCard
            content={content}
            id={id}
            img={img}
            key={id}
            name={name}
          />
        ))}
      </Flex>

      <Box margin={"auto"}>
        <chakra.h1
          py={5}
          fontSize={28}
          fontWeight={"bold"}
          color={useColorModeValue("gray.700", "gray.50")}
        >
          Know more updates from JSI Solutions
        </chakra.h1>
      </Box>
    </Flex>
  );
}
