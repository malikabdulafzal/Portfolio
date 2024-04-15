import Navbar from "./components/Navbar";
import Infopicture from "./components/Infopicture";
import Info from "./components/Info";
import Subinfo from "./components/Subinfo";
import Process from "./components/Process";
import styles from "./App.module.css";
import Portfolio from "./pages/Portfolio";
import Disscuss from "./pages/Disscuss";

function App() {
  return (
    <>
      <Navbar />
      <div className={styles.bgColor}>
        <div className={styles.infoPart}>
          <Info />
          <Infopicture />
        </div>


        <Subinfo  />

      </div>
      <Process />


      <Portfolio  />
      <Disscuss />

    </>
  );
}

export default App;
