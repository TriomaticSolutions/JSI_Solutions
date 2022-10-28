import about__sponsors2 from "../../../Assets/Images/a_about__sponsors2.png";
import { Button, Flex, Box, chakra } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

export default function Page5() {
  return (
    <Flex
      bg="white"
      _dark={{
        bg: "#3e3e3e",
      }}
      py={50}
      mt={100}
      w="full"
      flexDirection={"column"}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        mx={{ lg: 4 }}
        display={{ lg: "flex" }}
        maxW={{ lg: "7xl" }}
        rounded={{ lg: "lg" }}
      >
        <Box
          w={{
            lg: "50%",
          }}
        >
          <Box>
            <img src={about__sponsors2} alt="" />
          </Box>
        </Box>

        <Flex
          py={12}
          px={6}
          maxW={{
            lg: "5xl",
            base: "full",
            sm: "full",
          }}
          w={{
            lg: "50%",
          }}
          justifyContent="center"
          flexDirection={"column"}
        >
          <chakra.h2
            fontSize={{
              sm: "2xl",
              base: "1xl",
              md: "3xl",
            }}
            color="#002b3d"
            _dark={{
              color: "white",
            }}
            fontWeight="bold"
          >
            Our Sponsors
          </chakra.h2>
          <chakra.p
            mt={4}
            color="gray.800"
            _dark={{
              color: "gray.400",
            }}
          >
            The project board is an exclusive resource for contract work. It's
            perfect for freelancers, agencies, and moonlighters.
          </chakra.p>

          <Box mt={8}>
            <UnorderedList>
              <ListItem>Food Prep</ListItem>
              <ListItem>Janitorial</ListItem>
              <ListItem>Fast Food</ListItem>
              <ListItem>Packaging</ListItem>
              <ListItem>Dishwashing</ListItem>
              <ListItem>Warehousing</ListItem>
              <ListItem>Manufacturing</ListItem>
            </UnorderedList>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
