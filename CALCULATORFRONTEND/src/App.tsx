import Nav from "./Components/Nav";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <Nav />
      </ChakraProvider>
    </>
  );
}

export default App;
