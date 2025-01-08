import { Hero } from "./Hero";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Adventage } from "./Adventage";
import { Description } from "./Description";

export const Start = () => (
  <main className="bg-custom-minsk text-white">
    <Header />
    <Hero />
    <Adventage />
    <Description />
    <Footer />
  </main>
);
