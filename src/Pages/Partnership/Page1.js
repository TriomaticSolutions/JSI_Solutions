import { Button, Box, chakra, SimpleGrid, Image } from "@chakra-ui/react";
import partnership1 from "../../Assets/Images/partnership1.png";

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
          <Box
            w="full"
            h="full"
            _dark={{
              bg: "gray.700",
            }}
          >
            <Image src={partnership1} />
          </Box>

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
              Solving Unskilled Labor Shortages
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
              We have proven success in helping businesses around the country
              consistently and effectively improve their labor challenges.
            </chakra.p>
          </Box>
        </SimpleGrid>
      </Box>
    </div>
  );
}
