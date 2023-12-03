import Calculator from "./Components/Calculator";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid templateAreas={`"nav" "main"`}>
        <GridItem area="nav">
          <Nav />
        </GridItem>

        <GridItem area="main" bg="#E8E8E8">
          <Calculator />
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
