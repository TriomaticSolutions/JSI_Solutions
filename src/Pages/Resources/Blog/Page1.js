import { Button, Box, chakra, SimpleGrid, Image } from "@chakra-ui/react";
import resource__blog1 from "../../../Assets/Images/resource__blog1.png";

export default function Page6() {
  return (
    <div
      style={{
        padding: "15px 0px 15px 0px",
        margin: "100px 0px 25px 0px",
      }}
    >
      <Box
        bg="white"
        _dark={{
          bg: "gray.900",
        }}
        m={"auto"}
        maxW={"4xl"}
      >
        <SimpleGrid
          alignItems="start"
          columns={{
            base: 1,
            md: 2,
          }}
          spacingY={{
            base: 10,
            md: 32,
          }}
          spacingX={{
            base: 10,
            md: 24,
          }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{
                base: "2xl",
                md: "3xl",
              }}
              fontWeight="bold"
              textAlign={{
                base: "center",
                md: "left",
              }}
              color="gray.800"
              _dark={{
                color: "gray.400",
              }}
            >
              JSI Blog
            </chakra.h2>

            <chakra.p
              mb={5}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="gray.800"
              _dark={{
                color: "gray.400",
              }}
              fontSize={{
                md: "sm",
              }}
            >
              Welcome to the BDV Solutions blog where we give further insights
              into the world of BDV Solutions, the EB-3 Visa, and the state of
              immigration in the United States.
            </chakra.p>
          </Box>

          <Box
            w="full"
            h="full"
            _dark={{
              bg: "gray.700",
            }}
          >
            <Image src={resource__blog1} />
          </Box>
        </SimpleGrid>
      </Box>
    </div>
  );
}
