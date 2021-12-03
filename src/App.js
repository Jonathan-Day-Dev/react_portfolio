import styles from './App.module.css';

import Navbar from "./components/nav/Navbar";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Navbar />
      <div className={styles.body}>
        <Header />
        <div>Description</div>
        <div>List of Projects</div>
        <div>Contact Me</div>
        <div>Footer</div>
      </div>
    </div>
  );
}

export default App;
