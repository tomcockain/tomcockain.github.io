import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <>
    <div className='App'>
      <Router>
        <Home></Home>
      </Router>
    </div>


    </>
  );
}

export default App;