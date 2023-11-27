import './App.css';

import { BrowserRouter as Router, Route, Switch, /*Redirect*/ } from 'react-router-dom';

import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz'
import { QuizDataProvider } from './contexts/QuizDataContext';
import Result from './pages/Result/Result'
import Timer from './components/Timer/Timer';

function App() {
  return (
    <Router>
      <QuizDataProvider>
        <div className="App">
          <Switch>

            <Route exact path='/'>
              <Home />
            </Route>
            
              <Route path='/quiz/:id'>
                <Quiz />
              </Route>

              <Route path='/result'>
                <Result />
              </Route>

              <Route path='/timer'>
                <Timer />
              </Route>



          </Switch>
        </div>
      </QuizDataProvider>
    </Router>
  );
}

export default App;
