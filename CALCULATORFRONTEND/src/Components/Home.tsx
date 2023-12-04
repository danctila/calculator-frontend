import { Box } from "@chakra-ui/react";
import Calculator from "./Calculator";

import Gradehelp from "./Gradehelp";
import Gradeintro from "./Gradeintro";

const Home = () => {
  return (
    <>
      <Box bg="#E8E8E8" minW="470px">
        <Gradeintro />
        <Calculator />
        <Gradehelp />
      </Box>
    </>
  );
};

export default Home;
