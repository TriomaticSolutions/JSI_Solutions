import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Checkbox,
} from "@chakra-ui/react";

import cookies from "../../../Utility/cookiesAuth";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signin() {
  // change to email
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const navigate = useNavigate();

  const expiresAt = 24 * 60 * 60 * 1000;

  const uhandler = (e) => {
    setUsername(e.target.value);
  };

  const phandler = (e) => {
    setPassword(e.target.value);
  };

  const chandler = () => {
    setRememberMe(!rememberMe ? true : false);
    console.log("remeber me", rememberMe);
  };

  const signIn = (e) => {
    e.preventDefault();

    axios
      .post("", {
        username: username,
        password: password,
      })
      .then((res) => {
        const Authorization = res.data.token;

        // remember Me is not checked.
        if (!rememberMe) {
          // IMP note: check the path in cookies.set("", , {path: "/"})
          cookies.set("access_token", Authorization, { path: "/dashboard" });

          setUsername("");
          setPassword("");

          navigate("/dashboard");
        }

        // remember Me is checked.
        else {
          let date = new Date();
          date.setTime(date.getTime() + expiresAt);

          // IMP note: check the path in cookies.set("", , {path: "/"})
          cookies.set("access_token", Authorization, {
            path: "/dashboard",
            expires: date,
          });

          setUsername("");
          setPassword("");

          navigate("/dashboard");
        }
      });
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
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Username</FormLabel>
                <Input onChange={uhandler} value={username} type="text" />
              </FormControl>

              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input onChange={phandler} value={password} type="password" />
              </FormControl>

              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox onChange={chandler}>Remember me</Checkbox>
                  {/* <Link color={"blue.400"}>Forgot password?</Link> */}
                </Stack>

                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={signIn}
                >
                  Sign in
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

export default Signin;
