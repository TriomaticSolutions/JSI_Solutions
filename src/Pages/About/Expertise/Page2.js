import { Box, chakra, Flex, Icon, useColorModeValue } from "@chakra-ui/react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GavelIcon from "@mui/icons-material/Gavel";
import FlagIcon from "@mui/icons-material/Flag";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

const testimonials = [
  {
    id: 1,
    img: FavoriteBorderIcon,
    content: "We prioritize transparency in this process",
  },
  {
    id: 2,
    img: GavelIcon,
    content: "We fight for each case from start to finish",
  },
  {
    id: 3,
    img: FlagIcon,
    content: "We work with government officials",
  },
  {
    id: 4,
    img: TravelExploreIcon,
    content: "We have employers around the country",
  },
  {
    id: 5,
    img: AccountBoxIcon,
    content: "We have employers in a range of industries",
  },
  {
    id: 6,
    img: InsertEmoticonIcon,
    content: "We find employers excited to sponsor you",
  },
  {
    id: 7,
    img: IntegrationInstructionsIcon,
    content: "We don't work with middle-men or agencies",
  },
];

function TestimonialCard(props) {
  const { content, img, id } = props;
  return (
    <Flex
      boxShadow={"lg"}
      maxW={"200px"}
      rounded={"xl"}
      p={5}
      m={3}
      position={"relative"}
      bg={useColorModeValue("gray.600", "gray.800")}
      key={id}
    >
      <Flex
        direction={"column"}
        justifyItems={"center"}
        alignItems={"center"}
        textAlign={"center"}
        color={"white"}
      >
        <chakra.p
          fontFamily={"Inter"}
          fontWeight={"medium"}
          fontSize={"15px"}
          pb={4}
        >
          {content}
        </chakra.p>

        <Icon as={img} />
      </Flex>
    </Flex>
  );
}

export default function GridBlurredBackdrop() {
  return (
    <Flex
      textAlign={"center"}
      py={16}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
    >
      <Box margin={"auto"}>
        <chakra.h1
          py={5}
          fontSize={48}
          fontWeight={"bold"}
          color={useColorModeValue("gray.700", "gray.50")}
        >
          We aren’t a traditional immigration agency:
        </chakra.h1>
      </Box>

      <Flex justifyContent={"center"} flexWrap={"wrap"}>
        {testimonials.map(({ content, id, img }) => (
          <TestimonialCard content={content} id={id} img={img} key={id} />
        ))}
      </Flex>
    </Flex>
  );
}
