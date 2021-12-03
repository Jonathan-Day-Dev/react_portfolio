import styles from './App.module.css';

import Navbar from "./components/nav/Navbar";
import Header from "./components/header/Header";
import PortfolioDesc from './components/main/desc/PortfolioDesc';
import ProjectList from './components/main/projects/ProjectList';
import ContactForm from './components/contact/ContactForm';

function App() {

  const projectList = [
    { name: "Calculator App" },
    { name: "Restaurant Menu Guide" },
    { name: "Student Tracker" }
  ]

  return (
    <div>
      <Navbar />
      <div className={styles.body}>
        <Header />
        <PortfolioDesc />
        <ProjectList projects={projectList}/>
        <ContactForm />
        <div>Footer</div>
      </div>
    </div>
  );
}

export default App;
