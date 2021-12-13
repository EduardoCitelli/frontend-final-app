import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/layout/nav/nav';
import Main from './components/layout/main/main';
import PageNotFound from './components/layout/PageNotFound';
import Footer from './components/layout/footer/footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />

        <main className="content">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/employees" component={Main} />
            <Route component={PageNotFound} />
          </Switch>
        </main>

        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
