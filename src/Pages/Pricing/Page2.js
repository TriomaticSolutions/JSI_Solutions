import {
  Badge,
  Box,
  Flex,
  Icon,
  Link,
  SimpleGrid,
  Text,
  chakra,
  Stack,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react";

const Page2 = () => {
  const topBg = useColorModeValue("gray.800", "gray.700");
  const bottomBg = useColorModeValue("white", "gray.800");
  const [bottomBgHex] = useToken("colors", [bottomBg]);

  const Feature = (props) => {
    return (
      <Flex align="center">
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color="blue.600"
            _dark={{
              color: "brand.300",
            }}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <chakra.span
            mt={2}
            color="gray.800"
            _dark={{
              color: "gray.400",
            }}
          >
            {props.children}
          </chakra.span>
        </Box>
      </Flex>
    );
  };

  return (
    <Flex
      boxSize="full"
      bg="#F9FAFB"
      _dark={{
        bg: "gray.600",
      }}
      py={12}
      px={{
        base: "1",
        sm: "2",
        md: "4",
        lg: "6",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        textAlign={{
          base: "left",
          md: "center",
        }}
        rounded="md"
        shadow="base"
        w="full"
        bg={bottomBg}
      >
        <Box pt={20} rounded="md" bg={topBg}>
          <Box w="full" px={[10, , 4]} mx="auto">
            <chakra.p
              fontSize={["lg", , "xl"]}
              color="orange.400"
              textTransform="uppercase"
              fontWeight="semibold"
            >
              Pricing
            </chakra.p>
            <Text
              mb={2}
              fontSize={["2xl", , "5xl"]}
              fontWeight="bold"
              lineHeight="tight"
              color="white"
            >
              The right price for you
            </Text>
          </Box>
          <Box
            bg={`linear-gradient(180deg, transparent 70%, ${bottomBgHex} 30%)`}
          >
            <SimpleGrid
              columns={[1, , , 2]}
              gap="24px"
              rounded="md"
              mx={[2, , 24]}
              textAlign="left"
            >
              <Box
                bg="white"
                _dark={{
                  bg: "gray.800",
                }}
                pt={10}
                shadow="lg"
                rounded="md"
              >
                <Flex direction="column">
                  <Box
                    px={{
                      base: "2",
                      sm: "4",
                      md: "6",
                      lg: "8",
                    }}
                    pb={5}
                  >
                    <Badge
                      mb={1}
                      fontSize="xs"
                      letterSpacing="wide"
                      colorScheme="brand"
                      fontWeight="medium"
                      rounded="full"
                      px={4}
                      py={1}
                    >
                      Option A
                    </Badge>

                    <Text
                      mb={2}
                      fontSize="2xl"
                      fontWeight={"bold"}
                      color="gray.900"
                      _dark={{
                        color: "gray.50",
                      }}
                      lineHeight="tight"
                    >
                      Adjustment of Status
                      <chakra.div
                        fontSize="2xl"
                        fontWeight="medium"
                        color="blue.400"
                        _dark={{
                          color: "gray.400",
                        }}
                      >
                        Total Cost: $20,500
                      </chakra.div>
                    </Text>

                    <chakra.p
                      mb={6}
                      fontSize="1xl"
                      fontWeight="bold"
                      color="orange.400"
                      _dark={{
                        color: "gray.500",
                      }}
                    >
                      First payment $6,000
                      <chakra.div
                        fontWeight="medium"
                        color="gray.600"
                        _dark={{
                          color: "gray.400",
                        }}
                      >
                        Paid at the time when you sign your BDV Solutions
                        contract
                      </chakra.div>{" "}
                    </chakra.p>

                    <chakra.p
                      mb={6}
                      fontSize="1xl"
                      fontWeight="bold"
                      color="orange.400"
                      _dark={{
                        color: "gray.500",
                      }}
                    >
                      Second payment $14,500
                      <chakra.div
                        fontWeight="medium"
                        color="gray.600"
                        _dark={{
                          color: "gray.400",
                        }}
                      >
                        Paid after the Labor Certificate is approved and before
                        the I-140/I- 485 is filed
                      </chakra.div>{" "}
                    </chakra.p>
                  </Box>

                  <Flex
                    px={10}
                    pt={5}
                    pb={10}
                    direction="column"
                    bg="red.50"
                    _dark={{
                      bg: "gray.900",
                    }}
                    roundedBottom="md"
                  >
                    <Stack mb={5} spacing={4}>
                      <Feature>Bank fees</Feature>
                      <Feature>BDV Solutions Application Fee</Feature>
                      <Feature>USCIS legal cost</Feature>
                      <Feature>BDV Solutions consulting fee</Feature>
                      <Feature>USCIS filing fees</Feature>
                      <Feature>BDV Solutions client services</Feature>
                      <Feature>Mailing fees</Feature>
                      <Feature>Argo Visa Interview preparation</Feature>
                    </Stack>

                    <Link
                      w="full"
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      px={5}
                      py={3}
                      border="solid transparent"
                      fontWeight="semibold"
                      rounded="md"
                      shadow="md"
                      _light={{
                        color: "white",
                      }}
                      bg="gray.800"
                      _dark={{
                        bg: "brand.500",
                      }}
                      _hover={{
                        bg: "gray.700",
                        _dark: {
                          bg: "brand.600",
                        },
                      }}
                    >
                      Get started
                    </Link>
                  </Flex>
                </Flex>
              </Box>

              <Box
                bg="white"
                _dark={{
                  bg: "gray.800",
                }}
                pt={10}
                shadow="lg"
                rounded="md"
              >
                <Flex direction="column">
                  <Box
                    px={{
                      base: "2",
                      sm: "4",
                      md: "6",
                      lg: "8",
                    }}
                    pb={5}
                  >
                    <Badge
                      mb={1}
                      fontSize="xs"
                      letterSpacing="wide"
                      colorScheme="brand"
                      fontWeight="medium"
                      rounded="full"
                      px={4}
                      py={1}
                    >
                      Option B
                    </Badge>

                    <Text
                      mb={2}
                      fontSize="2xl"
                      fontWeight={"bold"}
                      color="gray.900"
                      _dark={{
                        color: "gray.50",
                      }}
                      lineHeight="tight"
                    >
                      Consular Processing
                      <chakra.div
                        fontSize="2xl"
                        fontWeight="medium"
                        color="blue.400"
                        _dark={{
                          color: "gray.400",
                        }}
                      >
                        Total Cost: $27,500
                      </chakra.div>
                    </Text>

                    <chakra.p
                      mb={6}
                      fontSize="1xl"
                      fontWeight="bold"
                      color="orange.400"
                      _dark={{
                        color: "gray.500",
                      }}
                    >
                      First payment $11,000
                      <chakra.div
                        fontWeight="medium"
                        color="gray.600"
                        _dark={{
                          color: "gray.400",
                        }}
                      >
                        Paid at the time when you sign your BDV Solutions
                        contract
                      </chakra.div>{" "}
                    </chakra.p>

                    <chakra.p
                      mb={6}
                      fontSize="1xl"
                      fontWeight="bold"
                      color="orange.400"
                      _dark={{
                        color: "gray.500",
                      }}
                    >
                      Second payment $16,500
                      <chakra.div
                        fontWeight="medium"
                        color="gray.600"
                        _dark={{
                          color: "gray.400",
                        }}
                      >
                        Paid after the Labor Certificate is approved and before
                        the I-140 is filed
                      </chakra.div>{" "}
                    </chakra.p>
                  </Box>

                  <Flex
                    px={10}
                    pt={5}
                    pb={10}
                    direction="column"
                    bg="orange.50"
                    _dark={{
                      bg: "gray.900",
                    }}
                    roundedBottom="md"
                  >
                    <Stack mb={5} spacing={4}>
                      <Feature>Bank fees</Feature>
                      <Feature>BDV Solutions Application Fee</Feature>
                      <Feature>USCIS legal cost</Feature>
                      <Feature>BDV Solutions consulting fee</Feature>
                      <Feature>USCIS filing fees</Feature>
                      <Feature>BDV Solutions client services</Feature>
                      <Feature>Mailing fees</Feature>
                      <Feature>Argo Visa Interview preparation</Feature>
                    </Stack>

                    <Link
                      w="full"
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      px={5}
                      py={3}
                      border="solid transparent"
                      fontWeight="semibold"
                      rounded="md"
                      shadow="md"
                      _light={{
                        color: "white",
                      }}
                      bg="gray.800"
                      _dark={{
                        bg: "brand.500",
                      }}
                      _hover={{
                        bg: "gray.700",
                        _dark: {
                          bg: "brand.600",
                        },
                      }}
                    >
                      Get started
                    </Link>
                  </Flex>
                </Flex>
              </Box>

              <Box
                bg="white"
                _dark={{
                  bg: "gray.800",
                }}
                pt={10}
                shadow="lg"
                rounded="md"
              >
                <Flex direction="column">
                  <Box
                    px={{
                      base: "2",
                      sm: "4",
                      md: "6",
                      lg: "8",
                    }}
                    pb={5}
                  >
                    <Badge
                      mb={1}
                      fontSize="xs"
                      letterSpacing="wide"
                      colorScheme="brand"
                      fontWeight="medium"
                      rounded="full"
                      px={4}
                      py={1}
                    >
                      Option C
                    </Badge>

                    <Text
                      mb={2}
                      fontSize="2xl"
                      fontWeight={"bold"}
                      color="gray.900"
                      _dark={{
                        color: "gray.50",
                      }}
                      lineHeight="tight"
                    >
                      Adjustment of Status
                      <chakra.div
                        fontSize="2xl"
                        fontWeight="medium"
                        color="blue.400"
                        _dark={{
                          color: "gray.400",
                        }}
                      >
                        Total Cost: $24,300
                      </chakra.div>
                    </Text>

                    <chakra.p
                      mb={6}
                      fontSize="1xl"
                      fontWeight="bold"
                      color="orange.400"
                      _dark={{
                        color: "gray.500",
                      }}
                    >
                      First payment $6,000
                      <chakra.div
                        fontWeight="medium"
                        color="gray.600"
                        _dark={{
                          color: "gray.400",
                        }}
                      >
                        Paid at the time when you sign your BDV Solutions
                        contract
                      </chakra.div>{" "}
                    </chakra.p>

                    <chakra.p
                      mb={6}
                      fontSize="1xl"
                      fontWeight="bold"
                      color="orange.400"
                      _dark={{
                        color: "gray.500",
                      }}
                    >
                      Monthly over 2 years $762.50
                      <chakra.div
                        fontWeight="medium"
                        color="gray.600"
                        _dark={{
                          color: "gray.400",
                        }}
                      >
                        Monthly payments made after application fee is fulfilled
                      </chakra.div>{" "}
                    </chakra.p>
                  </Box>

                  <Flex
                    px={10}
                    pt={5}
                    pb={10}
                    direction="column"
                    bg="yellow.50"
                    _dark={{
                      bg: "gray.900",
                    }}
                    roundedBottom="md"
                  >
                    <Stack mb={5} spacing={4}>
                      <Feature>Bank fees</Feature>
                      <Feature>BDV Solutions Application Fee</Feature>
                      <Feature>USCIS legal cost</Feature>
                      <Feature>BDV Solutions consulting fee</Feature>
                      <Feature>USCIS filing fees</Feature>
                      <Feature>BDV Solutions client services</Feature>
                      <Feature>Mailing fees</Feature>
                      <Feature>Argo Visa Interview preparation</Feature>
                    </Stack>

                    <Link
                      w="full"
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      px={5}
                      py={3}
                      border="solid transparent"
                      fontWeight="semibold"
                      rounded="md"
                      shadow="md"
                      _light={{
                        color: "white",
                      }}
                      bg="gray.800"
                      _dark={{
                        bg: "brand.500",
                      }}
                      _hover={{
                        bg: "gray.700",
                        _dark: {
                          bg: "brand.600",
                        },
                      }}
                    >
                      Get started
                    </Link>
                  </Flex>
                </Flex>
              </Box>

              <Box
                bg="white"
                _dark={{
                  bg: "gray.800",
                }}
                pt={10}
                shadow="lg"
                rounded="md"
              >
                <Flex direction="column">
                  <Box
                    px={{
                      base: "2",
                      sm: "4",
                      md: "6",
                      lg: "8",
                    }}
                    pb={5}
                  >
                    <Badge
                      mb={1}
                      fontSize="xs"
                      letterSpacing="wide"
                      colorScheme="brand"
                      fontWeight="medium"
                      rounded="full"
                      px={4}
                      py={1}
                    >
                      Option D
                    </Badge>

                    <Text
                      mb={2}
                      fontSize="2xl"
                      fontWeight={"bold"}
                      color="gray.900"
                      _dark={{
                        color: "gray.50",
                      }}
                      lineHeight="tight"
                    >
                      Consular Processing
                      <chakra.div
                        fontSize="2xl"
                        fontWeight="medium"
                        color="blue.400"
                        _dark={{
                          color: "gray.400",
                        }}
                      >
                        Total Cost: $32,300
                      </chakra.div>
                    </Text>

                    <chakra.p
                      mb={6}
                      fontSize="1xl"
                      fontWeight="bold"
                      color="orange.400"
                      _dark={{
                        color: "gray.500",
                      }}
                    >
                      First payment $11,000
                      <chakra.div
                        fontWeight="medium"
                        color="gray.600"
                        _dark={{
                          color: "gray.400",
                        }}
                      >
                        Paid at the time when you sign your BDV Solutions
                        contract
                      </chakra.div>{" "}
                    </chakra.p>

                    <chakra.p
                      mb={6}
                      fontSize="1xl"
                      fontWeight="bold"
                      color="orange.400"
                      _dark={{
                        color: "gray.500",
                      }}
                    >
                      Monthly over 3 years $591.67
                      <chakra.div
                        fontWeight="medium"
                        color="gray.600"
                        _dark={{
                          color: "gray.400",
                        }}
                      >
                        Monthly payments made after application fee is fulfilled
                      </chakra.div>{" "}
                    </chakra.p>
                  </Box>

                  <Flex
                    px={{
                      base: "2",
                      sm: "4",
                      md: "6",
                      lg: "8",
                    }}
                    pt={5}
                    pb={10}
                    direction="column"
                    bg="green.50"
                    _dark={{
                      bg: "gray.900",
                    }}
                    roundedBottom="md"
                  >
                    <Stack mb={5} spacing={4}>
                      <Feature>Bank fees</Feature>
                      <Feature>BDV Solutions Application Fee</Feature>
                      <Feature>USCIS legal cost</Feature>
                      <Feature>BDV Solutions consulting fee</Feature>
                      <Feature>USCIS filing fees</Feature>
                      <Feature>BDV Solutions client services</Feature>
                      <Feature>Mailing fees</Feature>
                      <Feature>Argo Visa Interview preparation</Feature>
                    </Stack>

                    <Link
                      w="full"
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      px={5}
                      py={3}
                      border="solid transparent"
                      fontWeight="semibold"
                      rounded="md"
                      shadow="md"
                      _light={{
                        color: "white",
                      }}
                      bg="gray.800"
                      _dark={{
                        bg: "brand.500",
                      }}
                      _hover={{
                        bg: "gray.700",
                        _dark: {
                          bg: "brand.600",
                        },
                      }}
                    >
                      Get started
                    </Link>
                  </Flex>
                </Flex>
              </Box>
            </SimpleGrid>

            <Flex
              mb="100px"
              mx={[4, , 24]}
              px={{
                base: "2",
                sm: "4",
                md: "6",
                lg: "8",
              }}
              py={6}
              mt={5}
              rounded="md"
              bg="#1a202c"
              _dark={{
                bg: "gray.700",
              }}
              align="center"
              direction={["column", , "row"]}
            >
              <Stack flex="0.8" pr={10}>
                <Badge
                  mb={1}
                  fontSize="xs"
                  letterSpacing="wide"
                  colorScheme="gray"
                  fontWeight="medium"
                  rounded="full"
                  px={6}
                  py={2}
                  w="fit-content"
                >
                  Dependent Fees
                </Badge>
                <Text color={"white"} textAlign="left">
                  Dependent fees are paid directly to your attorney when the
                  I-140 is filed. BDV Solutions does not collect any fees for
                  your dependents in this process.
                  <Text
                    mb={2}
                    fontWeight={"bold"}
                    color="blue.400"
                    _dark={{
                      color: "gray.50",
                    }}
                    lineHeight="tight"
                  >
                    Adjustment of Status
                    <chakra.div
                      fontSize="20px"
                      fontWeight="light"
                      color="white"
                      _dark={{
                        color: "gray.400",
                      }}
                    >
                      $1,725 (over 14 years old)
                    </chakra.div>
                    <chakra.div
                      fontSize="20px"
                      fontWeight="light"
                      color="white"
                      _dark={{
                        color: "gray.400",
                      }}
                    >
                      $1,225 (under 14 years old)
                    </chakra.div>
                  </Text>
                  <Text
                    mb={2}
                    fontWeight={"bold"}
                    color="blue.400"
                    _dark={{
                      color: "gray.50",
                    }}
                    lineHeight="tight"
                  >
                    Consular Processing
                    <chakra.div
                      fontSize="20px"
                      fontWeight="light"
                      color="white"
                      _dark={{
                        color: "gray.400",
                      }}
                    >
                      $1,190
                    </chakra.div>
                  </Text>
                </Text>
              </Stack>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Page2;
