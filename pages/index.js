import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default () => (
  <div className="h-screen flex flex-col">
    <Header />
    <Main className="flex-1 flex justify-center items-center">
      <h1 className="text-center leading-normal font-serif text-4xl">
        The best option to go there. Anywhere. Anytime.
      </h1>
    </Main>
    <Footer />
  </div>
);
