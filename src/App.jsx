import logo from "./logo.svg";
import styles from "./App.module.css";
import { createSignal } from "solid-js";
import Home from "./Home";
import Navbar from "./components/Navbar";
import About from "./About";
import Contact from "./Contact"
import { Routes, Route } from "@solidjs/router"
import "./style.css"

function App() {

  return (
    <>
    <div class={styles.App}>
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Routes>
    </div>
    </>
  );
}

export default App;
