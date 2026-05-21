import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Obras from './pages/Obras/Obras';
import Sobre from './pages/Sobre/Sobre';
import Videoaulas from './pages/Videoaula/Videoaula';
import DicasVestibular from './pages/DicasVestibular/DicasVestibular'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/obras" element={<Obras />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/video-aulas" element={<Videoaulas />} />
                <Route path="/dicas-vestibular" element={<DicasVestibular />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
