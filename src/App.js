import './App.css';
import Cards from './Components/Cards';
import Category from './Components/Category';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>

<Category/>
<Cards/>
<Footer/>
    </div>
  );
}

export default App;
