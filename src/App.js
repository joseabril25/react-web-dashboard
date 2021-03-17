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
import AuthChecker from './components/AuthChecker/AuthChecker';

const routes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/dashboard",
    component: Dashboard
  },
];


const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router >
          <AuthChecker>
            <Switch>
              {routes.map((route, index) => (
                <Route path={route.path} key={index}>
                  <route.component />
                </Route>
              ))}
            </Switch>
          </AuthChecker>
        </Router>
      </div>
    </Provider>
    
  );
}

export default App;
