import { Adventage } from "./Adventage";
import { Description } from "./Description";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";

export const Start = () => (
  <main className="bg-custom-minsk text-white">
    <Header />
    <Hero />
    <Adventage />
    <Description />
    <Footer />
  </main>
);
