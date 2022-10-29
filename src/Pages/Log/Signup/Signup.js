import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import validate from "../../../Utility/validator";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [userFirstName, setUserFirstName] = useState("");
  const [userSecondName, setUserSecondName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorIs, setErrorIs] = useState(true);

  const navigate = useNavigate();

  const fHandler = (e) => {
    setUserFirstName(e.target.value);
  };

  const sHandler = (e) => {
    setUserSecondName(e.target.value);
  };

  const uHandler = (e) => {
    setUserName(e.target.value);
  };

  const eHandler = (e) => {
    setEmail(e.target.value);
  };

  const pHandler = (e) => {
    setPassword(e.target.value);
    setErrorIs(validate(password));
  };

  const cHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const signup = (e) => {
    e.preventDefault();

    axios
      .post("", {
        username: userName,
        first_name: userFirstName,
        last_name: userSecondName,
        email: email,
        password: password,
        password2: confirmPassword,
      })
      .then((res) => {
        console.log("res =>>> ", res);
      });

    setUserFirstName("");
    setUserSecondName("");
    setUserName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    navigate("/login");
  };

  return (
    <div>
      <Navbar />

      <Flex
        pt={32}
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
          </Stack>

          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      onChange={fHandler}
                      value={userFirstName}
                      type="text"
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      onChange={sHandler}
                      value={userSecondName}
                      type="text"
                    />
                  </FormControl>
                </Box>
              </HStack>

              <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input onChange={uHandler} value={userName} type="text" />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input onChange={eHandler} value={email} type="email" />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    onChange={pHandler}
                    value={password}
                    type={showPassword ? "text" : "password"}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    onChange={cHandler}
                    value={confirmPassword}
                    type={showPassword ? "text" : "password"}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              {errorIs === false ? (
                <span
                  className="inputField__error"
                  style={{
                    fontSize: "12px",
                    color: "red",
                    backgroundColor: "whitesmoke",
                    borderRadius: "3px",
                    padding: "5px",
                    margin: "5px 0px",
                  }}
                >
                  Min Length 8, min lowercase 1, min uppercase 1, min numbers 1,
                  min symbols: 1
                </span>
              ) : (
                <span></span>
              )}

              {password !== confirmPassword ? (
                <span
                  className="comparePassword__error"
                  style={{
                    color: "red",
                    fontSize: "12px",
                    backgroundColor: "whitesmoke",
                    borderRadius: "3px",
                    padding: "5px",
                    margin: "5px 0px",
                  }}
                >
                  Password are not matched
                </span>
              ) : (
                <span></span>
              )}

              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onSubmit={signup}
                >
                  Sign up
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>

      <Footer />
    </div>
  );
}

export default Signup;
