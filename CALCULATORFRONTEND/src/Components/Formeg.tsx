import { Box, HStack, Input, Text } from "@chakra-ui/react";

const Formeg = () => {
  return (
    <>
      <Box bg="#A29165" w="470px" h="80px" mt="30px" p="10px" mb="30px">
        <HStack>
          <Text fontSize="15" ml="3px">
            Assignment (opt.)
          </Text>
          <Text fontSize="15" ml="25px">
            Points earned
          </Text>
          <Text fontSize="15" ml="5px">
            Total points
          </Text>
          <Text fontSize="15" ml="13px">
            Category
          </Text>
        </HStack>
        <HStack spacing="20px">
          <Input
            bg="#E8E8E8"
            w="155px"
            borderRadius="4"
            value="Homework 1"
          ></Input>
          <Input bg="#E8E8E8" w="80px" borderRadius="4" value="8"></Input>
          <Input bg="#E8E8E8" w="80px" borderRadius="4" value="10"></Input>
          <Input bg="#E8E8E8" w="80px" borderRadius="4" value="AFL"></Input>
        </HStack>
      </Box>
    </>
  );
};

export default Formeg;
