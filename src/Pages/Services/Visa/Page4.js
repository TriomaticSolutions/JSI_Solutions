import {
  Button,
  Flex,
  UnorderedList,
  ListItem,
  chakra,
  Box,
} from "@chakra-ui/react";
import services__unskill1 from "../../../Assets/Images/a_services__unskill1.png";

export default function Page5() {
  return (
    <Flex
      bg="white"
      _dark={{
        bg: "#3e3e3e",
      }}
      py={50}
      m={"auto"}
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
            Who is eligible for EB3?
          </chakra.h2>
          <chakra.p
            mt={4}
            color="gray.800"
            _dark={{
              color: "gray.400",
            }}
          >
            <UnorderedList pl={4}>
              <ListItem>No degree requirements needed</ListItem>
              <ListItem>No prior work experience needed</ListItem>
              <ListItem>Can’t be overqualified</ListItem>
              <ListItem>Need an employer sponsor</ListItem>
              <ListItem>
                You can adjust your visa status within the U.S
              </ListItem>
              <ListItem>You can apply from your home country</ListItem>
            </UnorderedList>
          </chakra.p>

          <Box mt={8}>
            <Button
              bg="orange.400"
              color="white"
              px={5}
              py={3}
              fontWeight="semibold"
              rounded="lg"
              _hover={{
                bg: "gray.800",
              }}
            >
              Determine your eligibility
            </Button>
          </Box>
        </Flex>

        <Box>
          <img src={services__unskill1} alt="" />
        </Box>
      </Box>
    </Flex>
  );
}
