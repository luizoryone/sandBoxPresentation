import SlideAbstracao from "./components/SlideAbstracao";
import SlidePOO from "./components/SlidePOO";
import SlideParadigma from "./components/SlideParadigma";
import SlideComparacaoParadigmas from "./components/SlideComparacaoParadigmas";

export default function App() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <SlideAbstracao />
      <SlidePOO />
      <SlideParadigma />
      <SlideComparacaoParadigmas />
    </div>
  );
}
