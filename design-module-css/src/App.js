import "./App.css";
import Banner from "./components/Banner/Banner";
import { FixButton } from "./components/FixButton/FixButton";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Main />
      <Footer />
      <FixButton />
    </div>
  );
}

export default App;
