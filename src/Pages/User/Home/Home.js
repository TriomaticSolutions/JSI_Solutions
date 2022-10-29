import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../../Components/Sidebar";
import Page1 from "./Page1";
import Page2 from "./Page2";

function Home() {
  return (
    <Flex
      flexDirection={{
        base: "column",
        sm: "column",
        md: "row",
        lg: "row",
      }}
    >
      <Box>
        <Sidebar />
      </Box>

      <Box>
        <Page1 />
        <Page2 />
      </Box>
    </Flex>
  );
}

export default Home;
