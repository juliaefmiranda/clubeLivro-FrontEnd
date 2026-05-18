import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Obras from './pages/Obras/Obras';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/obras" element={<Obras />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
