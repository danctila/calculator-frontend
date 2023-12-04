import { HStack, Link, Text, VStack } from "@chakra-ui/react";
import Formeg from "./Formeg";

const Gradehelp = () => {
  return (
    <>
      <HStack justify="center" minW="470px" mt="40px" pb="250px">
        <VStack w="470px" align="left" spacing="1px">
          <Text
            fontSize="20px"
            fontWeight="bold"
            color="black"
            pb="10px"
            px="15px"
          >
            Help
          </Text>
          <Text fontSize="16px" fontWeight="semibold" color="black" px="15px">
            Example
          </Text>
          <Text fontSize="16px" fontWeight="normal" color="black" px="15px">
            Homework assignment scored 8/10 in the AFL 20% category.
          </Text>
          <Formeg />
          <Text fontSize="16px" fontWeight="semibold" color="black" px="15px">
            Note
          </Text>
          <Text fontSize="16px" fontWeight="normal" color="black" px="15px">
            The assignment field is optional and will not effect calculation.
          </Text>
          <Text fontSize="16px" fontWeight="normal" color="black" px="15px">
            The default value for the category field is AFL 20% with no option
            selected.
          </Text>
          <Text
            fontSize="16px"
            fontWeight="semibold"
            color="black"
            mt="25px"
            px="15px"
          >
            Feedback
          </Text>
          <Text fontSize="16px" fontWeight="normal" color="black" px="15px">
            If issues persist or you have any questions please email{" "}
            <Link
              color="blue"
              onClick={() =>
                (window.location.href = "mailto:danctila@gmail.com")
              }
            >
              Danctilla@gmail.com
            </Link>
          </Text>
        </VStack>
      </HStack>
    </>
  );
};

export default Gradehelp;
