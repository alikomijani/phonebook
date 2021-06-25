import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Contacts, Favorite, Phone, ContactSingle } from './pages'
import { Footer } from './components'
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path={'/contacts/:id'} component={ContactSingle} />
          <Route path={'/contacts'} exact={true} component={Contacts} />
          <Route path={'/favorites'}>
            <Favorite />
          </Route>
          <Route path={'/phone'}>
            <Phone />
          </Route>
          <Route path={'/'}>
            <div>404</div>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
