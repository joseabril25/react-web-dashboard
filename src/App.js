import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch } from 'react-router-dom';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Dashboard from './pages/dashboard/home';
import { Provider } from 'react-redux';
import store from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router >
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
    
  );
}

export default App;
