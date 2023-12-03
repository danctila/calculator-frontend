import { Flex, HStack, Link } from "@chakra-ui/react";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Flex w="100%" h="80px" bg="#989898" justifyContent="center" mt="250px">
        <HStack w="350px" justifyContent="space-between">
          <Link fontWeight="semibold" fontSize="16px" as="u">
            HOME
          </Link>
          <Link fontWeight="semibold" fontSize="16px" as="u">
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
