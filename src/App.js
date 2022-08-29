import { ThemeProvider } from "styled-components"; // export only
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";

import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global"; // export default

import content from "./data/content";

// Theme Provider: setting on global variables/ styles, wrap it around the whole app and 'theme' can be accessible in child components
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  breakpoints: {
    mobile: "768px",
  },
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
