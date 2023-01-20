import { Box, Text } from "@chakra-ui/react";

function Navbar() {
  return (
    <Box
      backgroundColor={"#fff"}
      position={"sticky"}
      w="100%"
      h={"50px"}
      top={0}
    >
      <Text align={"center"} fontSize={"sm"}></Text>
    </Box>
  );
}

export default Navbar;
