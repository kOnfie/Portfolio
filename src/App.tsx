import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { Separator } from "./components/ui/Separator";
import { Projects } from "./sections/Projects";
import { Footer } from "./components/Footer";
import { About } from "./sections/About";
import { Technologies } from "./sections/Technologies";

function App() {
  return (
    <>
      <Header />

      <main className="mt-[96px]">
        <Hero />

        <Separator className="my-20  max-md:my-15 max-ss:my-10" />
        <About />
        <Separator className="my-20  max-md:my-15 max-ss:my-10" />
        <Technologies />
        <Separator className="my-20  max-md:my-15 max-ss:my-10" />

        <Projects />
      </main>

      <Separator className="my-20  max-md:my-15 max-ss:my-10" />

      <Footer />
    </>
  );
}

export default App;
