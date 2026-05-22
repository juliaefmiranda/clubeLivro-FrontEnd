import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Obras from './pages/Obras/Obras';
import Sobre from './pages/Sobre/Sobre';
import Videoaulas from './pages/Videoaula/Videoaula';
import DicasVestibular from './pages/DicasVestibular/DicasVestibular';
import QuestoesSimulado from './pages/QuestoesSimulado/QuestoesSimulado';
import InstrucoesSimulado from './pages/InstrucoesSimulado/InstrucoesSimulado';
import DetalhesLivro from './pages/DetalhesLivro/DetalhesLivro';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/obras" element={<Obras />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/video-aulas" element={<Videoaulas />} />
                <Route path="/dicas-vestibular" element={<DicasVestibular />} />
                <Route path="/simulado" element={<InstrucoesSimulado />} />
                <Route path="/simulados" element={<InstrucoesSimulado />} /> {/* Adicione esta linha */}
                <Route path="/simulado/questoes" element={<QuestoesSimulado />} />
                <Route path='/obras/:origem/:id' element={<DetalhesLivro/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;