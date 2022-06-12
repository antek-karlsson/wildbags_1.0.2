import { Container } from "@chakra-ui/react";
import Footer from "../components/footer/footer.component";
import Navigation from "../components/navigation/navigation.comp";
import Hero from "../components/hero/hero.comp";
import Infobox1 from "../components/infobox1/infobox1.comp";
import Infobox2 from "../components/infobox2/infobox2.comp";

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Infobox1 />
      <Infobox2 />
      <Footer />
    </>
  );
};

export default Home;
