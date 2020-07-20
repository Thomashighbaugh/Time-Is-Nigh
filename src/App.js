import React from "react";
import Header from "./components/Header";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer";
import Countdown from "./components/Countdown";
function App() {
  return (
    <div className="App">

      <Header />
      {/*<Stopwatch />*/}
      <Countdown />
      <Footer />
    </div>
  );
}

export default App;
