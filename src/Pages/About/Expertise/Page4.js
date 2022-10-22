import { Container, Heading, Stack, Text, Button } from "@chakra-ui/react";
import about__expertise2 from "../../../Assets/Images/about__expertise2.png";

export default function CallToActionWithIllustration() {
  return (
    <Container align={"center"} marginTop={10} maxW={"5xl"}>
      <img
        src={about__expertise2}
        alt={"Logo"}
        style={{
          width: "200px",
          height: "200px",
          position: "relative",
          margin: "20px",
        }}
      />

      <Heading
        fontWeight={500}
        fontSize={{ base: "1xl", sm: "1xl", md: "1xl" }}
      >
        Learn more about the program
      </Heading>
      <Text color={"gray.500"}>
        Check out our series of explanatory videos which will guide you through
        the entire process step-by-step.
      </Text>

      <Stack textAlign={"start"} marginTop={10} spacing={4}>
        <Heading
          maxW={"1xl"}
          fontWeight={700}
          fontSize={{ base: "2xl", sm: "2xl", md: "2xl" }}
          lineHeight={"100%"}
        >
          History of BDV Solutions
        </Heading>
        <Text color={"gray.500"} maxW={"1xl"}>
          BDV Solutions, LLC ("BDV") is the largest independent third party
          provider of EB-3 employee sponsor consulting and case management
          services in the U.S., focusing on unskilled (entry level) labor
          solutions for U.S. businesses. BDV works with the top immigration law
          firms to assist non-immigrant visa holders adjust their visa status in
          the U.S. from an eligible non-immigrant visa to EB-3 permanent
          residency Green Card and foreign nationals living outside of the U.S.
          through Consulate Process.
          <br />
          <br />
          BDV was founded by CEO, Britt Davis Vergnolle in 2011, following a
          series of successful international businesses. She is joined by highly
          experienced team including Chris Richardson, Nhu-Y Le, Holly Lee, and
          more. Richardson is a practicing immigration attorney with a
          distinguished career as a U.S. diplomat and he is a frequent
          contributor to a number of publications including The New York Times,
          CNN, and NPR. In addition, award winning and nationally recognized
          CFO, Holly Lee, is on the team. Nhu-Y Le is a licensed immigration
          attorney with prior experiences at Microsoft, Fragomen, and LegalPad.
          <br />
          <br />
          BDV Solutions received an investment from Astara Capital in November
          2021, which has only legitimized this ever growing EB3 Unskilled Visa
          process. BDV Solutions also works with an established government
          relations team that includes support from Leon Rodriguez, former
          Director of USCIS, David Wilkins, former U.S. ambassador to China, as
          well as a host of other former U.S. diplomats and federal government
          officials.
          <br />
          The entire BDV Solutions Team brings unique experiences from all
          corners of the globe (truly).
        </Text>

        <Stack spacing={4} direction={"row"}>
          <Button
            my={6}
            rounded={"full"}
            px={4}
            colorScheme={"orange"}
            bg={"orange.400"}
            _hover={{ bg: "orange.500" }}
          >
            Get to know us
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
