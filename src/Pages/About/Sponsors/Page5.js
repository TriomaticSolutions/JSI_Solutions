import { Flex, Container, Stack, Image } from "@chakra-ui/react";

import about__sponsors3 from "../../../Assets/Images/about__sponsors3.png";

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "20px",
              width: "20px",
              backgroundColor: "#005287",
            }}
          ></div>
          <span
            style={{
              padding: "5px 5px",
            }}
          >
            JSI sourced employer locations
          </span>
        </p>
        <Flex w={"full"}>
          <IMG
            height={{ sm: "24rem", lg: "28rem" }}
            mt={{ base: 12, sm: 16 }}
          />
        </Flex>
      </Stack>
    </Container>
  );
}

export const IMG = () => {
  return (
    <Image
      src={about__sponsors3}
      width="100%"
      viewBox="0 0 702 448"
      fill="none"
    />
  );
};
