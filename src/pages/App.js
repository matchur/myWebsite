import './App.css';
import GpHeader from '../components/gpHeader/gpHeader'
import GpAboutMe from '../components/gpAboutMe/gpAboutMe'
import GpHabilities from '../components/gpHabilities/gpHabilities';
import CpSpliter from '../components/cpSpliter/cpSpliter';


function App() 
{
  return (
    <div className= "App-backGround">
      <header className="App-header">
            <GpHeader />            
            <GpAboutMe />
            <CpSpliter />
            <GpHabilities />
            <CpSpliter />
           
      </header>
      
   </div>
   
  );
}

export default App;
