import { Flex, HStack, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Flex w="100%" h="80px" bg="#989898" justifyContent="center">
        <HStack w="350px" justifyContent="space-between">
          <Link
            fontWeight="semibold"
            fontSize="16px"
            as={ReactRouterLink}
            to="/"
          >
            HOME
          </Link>
          <Link
            fontWeight="semibold"
            fontSize="16px"
            as={ReactRouterLink}
            to="/about"
          >
            ABOUT
          </Link>
          <Link
            fontWeight="semibold"
            fontSize="16px"
            as="u"
            onClick={scrollTop}
          >
            TOP
          </Link>
        </HStack>
      </Flex>
    </>
  );
};

export default Footer;
