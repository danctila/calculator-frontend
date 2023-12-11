import {
  HStack,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
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
          <UnorderedList pl="15px">
            <ListItem fontSize="16px" fontWeight="normal" color="black">
              The assignment field is optional and will not effect calculation.
            </ListItem>
            <ListItem fontSize="16px" fontWeight="normal" color="black">
              With no category selected, the returned result will be 0.
            </ListItem>
            <ListItem fontSize="16px" fontWeight="normal" color="black">
              PowerSchool rounds the calculated average grade to the nearest
              whole number.
            </ListItem>
          </UnorderedList>
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
                (window.location.href = "mailto:danctilla@gmail.com")
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
