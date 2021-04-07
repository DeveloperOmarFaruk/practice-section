import { BrowserRouter as Router } from 'react-router-dom'
import {GlobalStyle} from './GlobalStyle'
import Api from './Components/Api/Api'
function App() {
    return ( 
    <Router>
    <GlobalStyle/>
    <Api/>
    </Router>
);
}
    export default App;
