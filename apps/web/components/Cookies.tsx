import { Box, Center, Flex, Text } from "@chakra-ui/react";

function Cookies() {
  return (
    <Flex
      backgroundColor={"#444444"}
      position={"fixed"}
      w="100%"
      h={"45px"}
      bottom={0}
    >
      <Center w={"100%"}>
        <Text color={"#fff"} fontSize={"sm"} align="center">
          Les cookies assurent le bon fonctionnement de nos services. En
          utilisant ces derniers, vous acceptez l'utilisation des cookies.{" "}
        </Text>
      </Center>
    </Flex>
  );
}

export default Cookies;
