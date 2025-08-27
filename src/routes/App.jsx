import Card from "../Components/Cards/Card";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/Header/NavBar";
import Hero from "../Components/Home/hero";
function App() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Hero />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
