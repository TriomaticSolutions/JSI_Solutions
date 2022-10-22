import { Box, Flex, Image, chakra, SimpleGrid } from "@chakra-ui/react";

import success__caseStudies2 from "../../../Assets/Images/success__caseStudies2.png";

const cardContent = [
  {
    id: 1,
    name: "Person Name 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: success__caseStudies2,
  },
  {
    id: 2,
    name: "Person Name 2",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: success__caseStudies2,
  },
  {
    id: 3,
    name: "Person Name 3",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: success__caseStudies2,
  },
  {
    id: 4,
    name: "Person Name 4",
    content: "Lorem ipsum dolor sit amet consectetur  ",
    avatar: success__caseStudies2,
  },
  {
    id: 5,
    name: "Person Name 5",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: success__caseStudies2,
  },
  {
    id: 6,
    name: "Person Name 6",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: success__caseStudies2,
  },
  {
    id: 7,
    name: "Person Name 7",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: success__caseStudies2,
  },
  {
    id: 8,
    name: "Person Name 8",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: success__caseStudies2,
  },
];

const Card = ({ name, content, avatar }) => {
  return (
    <Box
      mx="auto"
      rounded="lg"
      _dark={{
        bg: "gray.800",
      }}
      maxW="2xl"
    >
      <Image
        maxW={"300px"}
        roundedTop="lg"
        fit="cover"
        src={avatar}
        alt="Article"
      />

      <Box py={1} px={1}>
        <Box>
          <chakra.span
            style={{
              fontSize: "13px",
            }}
            textTransform="uppercase"
            color="brand.600"
            _dark={{
              color: "brand.400",
            }}
          >
            {name}
          </chakra.span>

          <chakra.p
            px={1}
            style={{
              fontSize: "13px",
            }}
            maxW={"200px"}
            color="gray.600"
            _dark={{
              color: "gray.400",
            }}
          >
            {content}
          </chakra.p>
        </Box>
      </Box>
    </Box>
  );
};

const Page3 = () => {
  return (
    <Flex
      _dark={{
        bg: "#3e3e3e",
      }}
      p={50}
      mb={10}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <SimpleGrid columns={{ base: 1, xl: 4, sm: 2 }} spacing={"7"} mx={"auto"}>
        {cardContent.map((cardInfo, id) => (
          <Card {...cardInfo} key={id} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Page3;
