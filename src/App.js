import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import ClientReviews from "./components/clientReviews";
import Footer from "./components/footer";
import MyPortfolio from "./components/myPortfolio";
import Navbar from "./components/navbar";
import ReadyToWork from "./components/readyToWork";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <WhatIDo />
      <MyPortfolio />
      <ClientReviews />
      <ReadyToWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
