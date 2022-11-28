import {
  Box,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  VStack,
  chakra,
  Button,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import logo2 from "../Assets/Images/logo5.png";

export default function Footer() {
  return (
    <Box
      bg="gray.50"
      _dark={{
        bg: "gray.600",
      }}
      // bgGradient={"linear(to-t, blackAlpha.600, transparent)"}
    >
      <Stack
        direction={{
          base: "column",
          lg: "row",
        }}
        w="full"
        justify="space-between"
        p={10}
      >
        <Flex justify="center" direction={"column"}>
          <Image
            src={logo2}
            alt="Company Logo"
            rounded="lg"
            width={{
              base: "150px",
              lg: "200px",
            }}
            height={{
              base: "75px",
              lg: "100px",
            }}
            my={{
              base: 2,
              lg: 0,
            }}
          />

          <Button
            bg="orange.400"
            color="white"
            px={5}
            mt={4}
            py={3}
            fontWeight="semibold"
            rounded="lg"
            _hover={{
              bg: "gray.800",
            }}
          >
            Contact us
          </Button>
        </Flex>

        <HStack
          alignItems="start"
          flex={1}
          justify="space-around"
          fontSize={{
            base: "12px",
            md: "16px",
          }}
          color="gray.800"
          _dark={{
            color: "white",
          }}
          textAlign={{
            base: "center",
            md: "left",
          }}
        >
          <Flex justify="start" direction="column">
            <chakra.h2
              mb={4}
              style={{
                fontSize: "18px",
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
              About
            </chakra.h2>
            <Link textTransform="uppercase">Expertise</Link>
            {/* <Link textTransform="uppercase">Team</Link>
            <Link textTransform="uppercase">Sponsors</Link>
            <Link textTransform="uppercase">Press Coverage</Link> */}
          </Flex>

          <Flex justify="start" direction="column">
            <chakra.h2
              mb={4}
              style={{
                fontSize: "18px",
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
              Services
            </chakra.h2>
            <Link textTransform="uppercase">BDV Process</Link>
            <Link textTransform="uppercase">EB-3 Unskilled Visa</Link>
          </Flex>
        </HStack>

        <HStack
          alignItems="start"
          flex={1}
          justify="space-around"
          style={{
            fontSize: "18px",
          }}
          color="gray.800"
          _dark={{
            color: "white",
          }}
          textAlign={{
            base: "center",
            md: "left",
          }}
        >
          <Flex justify="start" direction="column">
            <chakra.h2
              mb={4}
              style={{
                fontSize: "18px",
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
              Success Stories
            </chakra.h2>
            <Link textTransform="uppercase">Testimonials</Link>
            {/* <Link textTransform="uppercase">Case Studies</Link>
            <Link textTransform="uppercase">Support</Link> */}
          </Flex>

          <Flex justify="start" direction="column">
            <chakra.h2
              mb={4}
              style={{
                fontSize: "18px",
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
              Resourses
            </chakra.h2>
            {/* <Link textTransform="uppercase">Blog</Link> */}
            <Link textTransform="uppercase">FAQ</Link>
          </Flex>
        </HStack>
      </Stack>

      <Divider
        w="95%"
        mx="auto"
        color="gray.600"
        _dark={{
          color: "#F9FAFB",
        }}
        h="3.5px"
      />

      <VStack py={3}>
        <HStack justify="center">
          <Link>
            <Icon
              color="gray.800"
              _dark={{
                color: "white",
              }}
              h="20px"
              w="20px"
              as={FaFacebookF}
            />
          </Link>

          <Link>
            <Icon
              color="gray.800"
              _dark={{
                color: "white",
              }}
              h="20px"
              w="20px"
              as={FaTwitter}
            />
          </Link>
          <Link>
            <Icon
              _dark={{
                color: "white",
              }}
              h="20px"
              w="20px"
              as={FaInstagram}
            />
          </Link>
          <Link>
            <Icon
              _dark={{
                color: "white",
              }}
              h="20px"
              w="20px"
              as={FaLinkedinIn}
            />
          </Link>
          <Link>
            <Icon
              _dark={{
                color: "white",
              }}
              h="20px"
              w="20px"
              as={FaYoutube}
            />
          </Link>
        </HStack>

        <Text
          textAlign="center"
          fontSize="smaller"
          _dark={{
            color: "white",
          }}
        >
          &copy;Copyright. All rights reserved.
        </Text>
      </VStack>
    </Box>
  );
}
