import { Box, Link, Flex, Image, chakra, SimpleGrid } from "@chakra-ui/react";

import success__caseStudies2 from "../../../Assets/Images/success__caseStudies2.png";

const cardContent = [
  {
    id: 1,
    name: "Person Name 1",
    heading: "A new life for this family",
    field1: "21 SEP 2015",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: success__caseStudies2,
  },
  {
    id: 2,
    name: "Person Name 2",
    heading: "Creating a bond with an employer.",
    field1: "11 SEP 2011",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: success__caseStudies2,
  },
  {
    id: 3,
    name: "Person Name 3",
    heading: "From Prep Cook to Head Pastry Chef ",
    field1: "1 FEB 2010",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: success__caseStudies2,
  },
  {
    id: 4,
    name: "Person Name 4",
    heading: "From Unskilled Job, to Business.",
    field1: "4 MAR 2020",
    content: "Lorem ipsum dolor sit amet consectetur  ",
    avatar: success__caseStudies2,
  },
  {
    id: 5,
    name: "Person Name 5",
    heading: "From setbacks to success",
    field1: "6 OCT 2009",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: success__caseStudies2,
  },
];

const Card = ({ heading, name, field1, content, avatar }) => {
  return (
    <Box
      mx="auto"
      rounded="lg"
      shadow="md"
      bg="gray.50"
      _dark={{
        bg: "gray.800",
      }}
      maxW="2xl"
    >
      <Image roundedTop="lg" fit="cover" src={avatar} alt="Article" />

      <Box p={6}>
        <Box>
          <chakra.span
            fontSize="xs"
            maxW={"20px"}
            textTransform="uppercase"
            color="brand.600"
            _dark={{
              color: "brand.400",
            }}
          >
            {name}
          </chakra.span>

          <chakra.h1
            maxW={"500px"}
            display="block"
            color="gray.800"
            _dark={{
              color: "white",
            }}
            fontWeight="bold"
            fontSize="2xl"
            mt={2}
          >
            {heading}
          </chakra.h1>
          <chakra.p
            maxW={"500px"}
            mt={2}
            fontSize="sm"
            color="gray.600"
            _dark={{
              color: "gray.400",
            }}
          >
            {content}
          </chakra.p>
        </Box>

        <Box mt={4}>
          <Flex alignItems="center">
            <Flex alignItems="center">
              <chakra.button
                w={"full"}
                m={"auto"}
                mt={"2"}
                mr={3}
                rounded={"lg"}
                px={3}
                py={3}
                fontSize="xs"
                color="white"
                bg={"#075384"}
                fontWeight="bold"
                textTransform="uppercase"
                _hover={{
                  bg: "gray.700",
                }}
                _focus={{
                  bg: "gray.900",
                }}
              >
                Read more
              </chakra.button>
            </Flex>

            <chakra.span
              mx={1}
              fontSize="sm"
              color="gray.600"
              _dark={{
                color: "gray.300",
              }}
            >
              {field1}
            </chakra.span>
          </Flex>
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
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <SimpleGrid
        columns={{ base: 1, xl: 2, sm: 2 }}
        spacing={"7"}
        m={5}
        mx={"auto"}
      >
        {cardContent.map((cardInfo, id) => (
          <Card {...cardInfo} key={id} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Page3;
