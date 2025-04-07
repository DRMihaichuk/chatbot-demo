import './App.css'
import BotPress from "./chatbots/BotPress.jsx";
import Zapier from "./chatbots/Zapier.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const AppContent = () => {
  return (
    <>
        {/*<Link to="/zapier">Zapier</Link>*/}
        {/*<br/>*/}
        {/*<Link to="/botpress">BotPress</Link>*/}

        {/*<Routes>*/}
        {/*    <Route path="/zapier" element={<Zapier />} />*/}
        {/*    <Route path="/botpress" element={<BotPress />} />*/}
        {/*</Routes>*/}
    </>
  )
}

const App = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

export default App
