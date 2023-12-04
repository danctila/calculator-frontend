import { HStack, Text, VStack } from "@chakra-ui/react";

const Gradeintro = () => {
  return (
    <>
      <HStack justify="center" pt="40px">
        <VStack w="470px" spacing="8px" align="left">
          <Text fontSize="20px" fontWeight="bold" color="black">
            Grade Calculator
          </Text>
          <Text fontSize="16px" fontWeight="normal" color="black">
            Use this calculator to find out the grade of a course based on
            weighted averages calculated at NHS.
          </Text>
        </VStack>
      </HStack>
    </>
  );
};

export default Gradeintro;
