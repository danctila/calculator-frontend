import { Box, HStack, Switch, Text, Tooltip, VStack } from "@chakra-ui/react";
import Calculator from "./Calculator";
import Gradehelp from "./Gradehelp";
import Gradeintro from "./Gradeintro";
import { InfoOutlineIcon } from "@chakra-ui/icons";
const Home = () => {
  return (
    <>
      <Box bg="#E8E8E8" minW="470px">
        <Gradeintro />
        <HStack justify="center" minW="470px">
          <VStack w="470px" align="left" spacing="1px" mt="50px">
            <HStack mx="15px">
              <Tooltip
                bg="#989898"
                color="#214D7D"
                hasArrow
                label="Increased control over input and output of the calculator"
                placement="top-start"
              >
                <InfoOutlineIcon />
              </Tooltip>
              <Text fontSize="16px" fontWeight="semibold" color="black">
                Advanced mode
              </Text>
              <Switch size="md" colorScheme="green"></Switch>
            </HStack>
          </VStack>
        </HStack>

        <Calculator />
        <Gradehelp />
      </Box>
    </>
  );
};

export default Home;
