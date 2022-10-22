import { Box, chakra, Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import GavelIcon from "@mui/icons-material/Gavel";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const testimonials = [
  {
    id: 1,
    img: PersonSearchIcon,
    content: "Recruit and vet employer sponsors",
  },
  {
    id: 2,
    img: ManageAccountsIcon,
    content: "Case management services",
  },
  {
    id: 3,
    img: GavelIcon,
    content: "Attorney pairing",
  },
  {
    id: 4,
    img: NoteAltIcon,
    content: "Relocation services",
  },
  {
    id: 5,
    img: SupportAgentIcon,
    content: "Consular application support",
  },
];

function TestimonialCard(props) {
  const { content, img, id } = props;
  return (
    <Flex
      boxShadow={"lg"}
      maxW={"150px"}
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
      py={10}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
    >
      <Flex justifyContent={"center"} flexWrap={"wrap"}>
        {testimonials.map(({ content, id, img }) => (
          <TestimonialCard content={content} id={id} img={img} key={id} />
        ))}
      </Flex>
    </Flex>
  );
}
