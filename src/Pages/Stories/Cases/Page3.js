import { Box, Flex, Image, chakra, SimpleGrid } from "@chakra-ui/react";
import success__caseStudies2 from "../../../Assets/Images/success__caseStudies2.png";

const cardContent = [
  {
    id: 1,
    heading: "A new life for this family",
    field1: "Janitor",
    field2: "Consular Processing",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: success__caseStudies2,
  },
  {
    id: 2,
    heading: "Creating a bond with an employer.",
    field1: "Janitor",
    field2: "Consular Processing",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: success__caseStudies2,
  },
  {
    id: 3,
    heading: "From Prep Cook to Head Pastry Chef ",
    field1: "Janitor",
    field2: "Consular Processing",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: success__caseStudies2,
  },
  {
    id: 4,
    heading: "From Unskilled Job, to Business.",
    field1: "Janitor",
    field2: "Consular Processing",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: success__caseStudies2,
  },
  {
    id: 5,
    heading: "From setbacks to success",
    field1: "Janitor",
    field2: "Consular Processing",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    avatar: success__caseStudies2,
  },
];

const Card = ({ heading, field1, field2, content, avatar }) => {
  return (
    <Box
      maxW="xs"
      mx="auto"
      bg="#edf3f8"
      _dark={{
        bg: "gray.800",
      }}
      shadow="lg"
      rounded="lg"
    >
      <Box px={4} py={2}>
        <chakra.h1
          color="gray.800"
          _dark={{
            color: "white",
          }}
          fontWeight="bold"
          fontSize="2xl"
          textTransform="uppercase"
        >
          {heading}
        </chakra.h1>
        <chakra.p
          mt={1}
          fontSize="sm"
          color="gray.600"
          _dark={{
            color: "gray.400",
          }}
        >
          {content}
        </chakra.p>
      </Box>

      <Image h={48} w="full" fit="cover" mt={2} src={avatar} alt="NIKE AIR" />

      <Flex
        alignItems="center"
        justifyContent="space-between"
        px={4}
        py={2}
        bg="gray.900"
        roundedBottom="lg"
      >
        <chakra.h1 color="white" fontWeight="normal" fontSize="sm">
          {field1}
        </chakra.h1>
        <chakra.h1 color="white" fontWeight="normal" fontSize="sm">
          {field2}
        </chakra.h1>
      </Flex>

      <chakra.button
        w={"full"}
        m={"auto"}
        mt={"2"}
        px={2}
        py={1}
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
        Learn more about this
      </chakra.button>
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
        columns={{ sm: 2, base: 1, xl: 3 }}
        spacing={"7"}
        mt={2}
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
