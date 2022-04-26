import './App.css';
import {Routes} from "react-router";
import {Route, BrowserRouter} from "react-router-dom";
import StartWindow from './components/ui-kit/StartWindow/StartWindow';
import LoadingWindow from './components/ui-kit/LoadingWindow/LoadingWindow';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/load' element={<LoadingWindow />}/>
        <Route exact path='/' element={<StartWindow />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
