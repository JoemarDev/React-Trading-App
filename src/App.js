import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './app/welcome.js';
import './app/assets/css/style.css';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import Header from './app/navigation/header.js';
import Sidebar from './app/navigation/sidebar.js'

function App() {
  return (
     <div>
        <Router>
            <Header/>
            <Sidebar/>
        </Router>
     </div>
  );
}

export default App;
