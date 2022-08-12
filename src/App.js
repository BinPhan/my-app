import Header from "./components/layouts/Header";
import List from './pages/List'
import New from './pages/New'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {

    return (
        <div>
            <Header />

            <Routes>
                <Route path="/" element={<List></List>}>
                </Route>
                <Route path="/new" element={<New></New>}>
                </Route>
            </Routes>
        </div>
    )

}

export default App