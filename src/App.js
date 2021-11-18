import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Items from './Pages/Items/Items';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Cars from './Pages/Cars/Cars';
import Details from './Pages/Details/Details';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/cars">
            <Cars></Cars>
          </Route>
          <PrivateRoute path="/items/:id">
            <Items></Items>
          </PrivateRoute>
          <Route path="/details">
            <Details></Details>
          </Route>
          <Route path="/about">
            <About />
          </Route>  
          <Route path="*">
            <NotFound></NotFound>
            </Route>  
        </Switch>
        
    </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
