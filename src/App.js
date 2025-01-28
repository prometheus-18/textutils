import './App.css';
import Navbar from './componets/Navbar';
import Textform from './componets/Textform';

function App() {
  return (
    <>
      <Navbar title="TEXTUTILS" aboutText ="about Text Util"/>
      <div className='container my-3'>
      <Textform header="Enter the text to analysn below :"/>
      </div>
    </>
  );
}

export default App;
