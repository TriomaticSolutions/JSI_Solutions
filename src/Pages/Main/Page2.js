import { Flex, Icon, Box, chakra, Image, Heading } from "@chakra-ui/react";

import main2 from "../../Assets/Images/a_main2.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";

const cardsDetail = [
  {
    id: 1,
    image: main2,
    name: "Person 1",
    content:
      "Thanks to the help of BDV [] I have my Green Card andd my family dose too.",
    country: "Country 1",
  },
  {
    id: 2,
    image: main2,
    name: "Person 2",
    content:
      "Thanks to the help of BDV [] I have my Green Card andd my family dose too.",
    country: "Country 2",
  },
  {
    id: 3,
    image: main2,
    name: "Person 3",
    content:
      "Thanks to the help of BDV [] I have my Green Card andd my family dose too.",
    country: "Country 2",
  },
  {
    id: 4,
    image: main2,
    name: "Person 4",
    content:
      "Thanks to the help of BDV [] I have my Green Card andd my family dose too.",
    country: "Country 43",
  },
];

const Cards = ({ image, name, content, country }) => {
  return (
    <Box // div
      w="sm"
      mx="auto"
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      style={{
        marginTop: "25px",
      }}
    >
      <Image
        w="full"
        h={56}
        fit="cover"
        objectPosition="center"
        src={image}
        alt="avatar"
      />

      <Flex alignItems="center" px={2} py={2} bg="gray.900" />

      <Box py={4} px={6}>
        <chakra.h1
          fontSize="xl"
          fontWeight="bold"
          color="gray.800"
          _dark={{
            color: "white",
          }}
        >
          {name}
        </chakra.h1>

        <chakra.p
          py={2}
          color="gray.700"
          _dark={{
            color: "gray.400",
          }}
          style={{
            fontSize: "17px",
          }}
        >
          {content}
        </chakra.p>

        <Flex
          alignItems="center"
          mt={4}
          color="gray.700"
          _dark={{
            color: "gray.200",
          }}
        >
          <Icon as={LocationOnIcon} h={6} w={6} mr={2} />

          <chakra.h1 px={2} fontSize="sm">
            {country}
          </chakra.h1>
        </Flex>
      </Box>
    </Box>
  );
};

export default function CallToActionWithIllustration() {
  return (
    <Box>
      <Heading
        maxW={"1xl"}
        paddingBottom={3}
        borderBottom={"2px solid #002b3d"}
        fontWeight={500}
        textAlign={"center"}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        color={"#002b3d"}
      >
        Life Changing Stories <br />
      </Heading>

      <Flex // div style: flex
        bg="white"
        _dark={{
          bg: "#3e3e3e",
        }}
        w="full"
        alignItems="center"
        flexWrap={"wrap"}
        style={{
          margin: "0px 0px 30px 0px",
        }}
      >
        {cardsDetail.map((cardInfo, id) => (
          <Cards {...cardInfo} key={id} />
        ))}
      </Flex>
    </Box>
  );
}
