import './App.css';
import GpHeader from '../components/gpHeader/gpHeader'
import GpAboutMe from '../components/gpAboutMe/gpAboutMe'

function App() 
{
  return (
    <div className= "App-backGround">
      <header className="App-header">
            <GpHeader />            
            <GpAboutMe />
      </header>
   
   </div>
  );
}

export default App;
