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
import Edit from "./pages/Edit";

function App(props) {

    return (
        <div>
            <Header />

            <Routes>
                <Route path="/" element={<List></List>}>
                </Route>
                <Route path="/new" element={<New></New>}>
                </Route>
                <Route path="/edit/:id" element={<Edit></Edit>}>
                </Route>
            </Routes>
        </div>
    )

}

export default App