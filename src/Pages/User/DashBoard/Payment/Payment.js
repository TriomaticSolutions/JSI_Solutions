import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import SimpleSidebar from "../../../../Components/Sidebar";
import Page1 from "./Page1";

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
        <SimpleSidebar />
      </Box>

      <Box>
        <Page1 />
      </Box>
    </Flex>
  );
}

export default Home;
