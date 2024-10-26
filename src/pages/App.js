import './App.css';
import GpHeader from '../components/gpHeader/gpHeader'
import GpAboutMe from '../components/gpAboutMe/gpAboutMe'
import GpHabilities from '../components/gpHabilities/gpHabilities';
import CpSpliter from '../components/cpSpliter/cpSpliter';
import GpFooter from '../components/gpFooter/gpFooter';
import GpProjects from '../components/gpProjects/gpProjects';
import GpContact from '../components/gpContact/gpContact';

function App() 
{
  
  return (
    <div className= "App-backGround">
      <header className="App-header">
                       
      <GpHeader />
      </header>
      <body>     
          <GpAboutMe />
            <CpSpliter />
            <GpHabilities />
            <CpSpliter />
            <GpProjects />
            <CpSpliter />
            <GpContact />
      </body>      
      <footer>
        <GpFooter />
      </footer>
   </div>
   
  );
}

export default App;
