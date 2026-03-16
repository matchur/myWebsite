import './App.css';
import GpHeader from '../components/gpHeader/gpHeader';
import GpAboutMe from '../components/gpAboutMe/gpAboutMe';
import GpHabilities from '../components/gpHabilities/gpHabilities';
import CpSpliter from '../components/cpSpliter/cpSpliter';
import GpFooter from '../components/gpFooter/gpFooter';
import GpProjects from '../components/gpProjects/gpProjects';
import GpContact from '../components/GpContact/gpContact';

function App() {
  return (
    <div className="App-backGround">
      <header className="App-header">
        <GpHeader />
      </header>

      <main>
        <section id="about">
          <GpAboutMe />
        </section>

        <CpSpliter />

        <section id="skills">
          <GpHabilities />
        </section>

        <CpSpliter />

        <section id="projects">
          <GpProjects />
        </section>

        <CpSpliter />

        <section id="contact">
          <GpContact />
        </section>
      </main>

      <footer>
        <GpFooter />
      </footer>
    </div>
  );
}

export default App;
