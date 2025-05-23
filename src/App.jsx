import Navbar from "./Component/Navbar/navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Staff from "./Component/Staff";
import Footer from "./Component/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Home />
        <About />
        <Staff />
      </main>
      <Footer />
    </>
  );
};

export default App;
