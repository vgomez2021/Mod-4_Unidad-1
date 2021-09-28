import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import BioPage from './pages/BioPage';
import VideoPage from './pages/VideoPage';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/biografia" exact component={BioPage} />
        <Route path="/video" exact component={VideoPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
