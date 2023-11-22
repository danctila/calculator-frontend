import Calculator from "./Components/Calculator";
import Nav from "./Components/Nav";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <Nav />
        <Calculator />
      </ChakraProvider>
    </>
  );
}

export default App;
