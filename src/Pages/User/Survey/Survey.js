import { Button, Box, Flex, chakra } from "@chakra-ui/react";

const Card = () => {
  return (
    <Box border={"1px solid black"} boxShadow="lg">
      Fill the survey form
    </Box>
  );
};

function Survey() {
  return (
    <div>
      <Card />
    </div>
  );
}

export default Survey;
