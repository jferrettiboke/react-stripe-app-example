import Header from ".//Header";
import Main from ".//Main";
import Footer from ".//Footer";

export default ({ children }) => (
  <React.Fragment>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </React.Fragment>
);
