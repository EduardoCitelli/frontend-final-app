import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Nav from './components/layout/nav/nav';
import Main from './components/layout/main/main';
import PageNotFound from './components/layout/PageNotFound';
import Footer from './components/layout/footer/footer';
import mainEmployee from './components/employees/main/main-employee';
import SignIn from './components/sign-in/sign-in';
import { useContext } from 'react';
import { AuthContext } from './context/auth-context';

function App() {
  const user = useContext(AuthContext);

  return (
    <BrowserRouter>
      <div className="App">
        {
          user ?
            (<Nav />) :
            (<></>)

        }

        <main className="content">
          <Switch>
            <Route
              exact
              path="/"
              component={
                user ?
                  Main :
                  () => (<Redirect to='/login' />)
              }
            />

            <Route
              exact
              path="/employees"
              component={
                user ?
                  mainEmployee
                  : () => (<Redirect to='/login' />)
              }
            />

            <Route exact path="/login" component={SignIn} />
            <Route component={PageNotFound} />
          </Switch>
        </main>

        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
