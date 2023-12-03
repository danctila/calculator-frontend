import { Center, Flex, HStack, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <Flex w="100%" h="80px" bg="#A29165" justifyContent="center">
        <HStack w="470px" justifyContent="space-between">
          <Center pl="15px">
            <Text fontSize="26" fontWeight="semibold" color="#214D7D">
              NHS Grade Calculator
            </Text>
          </Center>
          <HStack mb="-45px">
            <Center
              fontWeight="bold"
              fontSize="16px"
              bg="#E8E8E8"
              color="#214D7D"
              h="35px"
              px="10px"
              as={ReactRouterLink}
              to="/"
            >
              <Text>HOME</Text>
            </Center>
            <Center
              fontWeight="bold"
              fontSize="16px"
              bg="#989898"
              color="#214D7D"
              h="35px"
              px="10px"
              as={ReactRouterLink}
              to="/about"
            >
              <Text>ABOUT</Text>
            </Center>
          </HStack>
        </HStack>
      </Flex>
    </>
  );
};

export default Nav;
