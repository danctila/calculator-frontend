import {
  Box,
  HStack,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Box bg="#E8E8E8" minW="470px">
        <HStack justify="center" pt="40px" minW="470px" px="15px" pb="250px">
          <VStack w="470px" spacing="8px" align="left">
            <Text fontSize="20px" fontWeight="bold" color="black">
              About
            </Text>
            <Text fontSize="16px" fontWeight="normal" color="black">
              Nhsgrader.danctil.com was made purely as a tool for others to use.
              If you like Nhsgrader.danctil.com please consider spreading the
              word to students around the school.
            </Text>
            <Text fontSize="16px" fontWeight="semibold" color="black">
              Creator
            </Text>
            <Text fontSize="16px" fontWeight="normal" color="black">
              This entire website was coded from scratch by Dylan Anctil using
              ReactJS as a framework for TypeScript. If you want to know more,
              check out this{" "}
              <Link color="blue" href="https://danctil.com">
                portfolio website{" "}
              </Link>
              for details.
            </Text>
            <Text fontSize="16px" fontWeight="semibold" color="black">
              Feedback
            </Text>
            <Text fontSize="16px" fontWeight="normal" color="black">
              Please help improve this site by sending feedback to the email
              below.
              <br />
              <br />
              Please send feedback about:
              <br />
            </Text>
            <UnorderedList>
              <ListItem>Suggestions.</ListItem>
              <ListItem>Corrections.</ListItem>
              <ListItem>Missing content.</ListItem>
            </UnorderedList>
            <Text fontSize="16px" fontWeight="normal" color="black">
              <br />
              Send feedback to:{" "}
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
      </Box>
    </>
  );
};

export default About;
