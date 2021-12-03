import styles from './App.module.css';

import Navbar from "./components/nav/Navbar";
import Header from "./components/header/Header";
import PortfolioDesc from './components/main/desc/PortfolioDesc';

function App() {
  return (
    <div>
      <Navbar />
      <div className={styles.body}>
        <Header />
        <PortfolioDesc />
        <div>List of Projects</div>
        <div>Contact Me</div>
        <div>Footer</div>
      </div>
    </div>
  );
}

export default App;
