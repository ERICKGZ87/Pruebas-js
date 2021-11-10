import logo from './logo.svg';
import './App.css';
import reportWebVitals from './reportWebVitals';

function App() {

  let txt="erick"
  let txt2="gonzalez"
  let txt3=`mi nombre es ${txt} ${txt2}`
  


  reportWebVitals(console.log(txt3));
  //reportWebVitals(console.log("largo",data1));



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
 

        
        
     
      </header>
    </div>
  );
}

export default App;


