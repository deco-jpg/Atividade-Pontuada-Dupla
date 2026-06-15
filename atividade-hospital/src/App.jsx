import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import QuemSomos from "./pages/QuemSomos/QuemSomos";
import Servicos from "./pages/Servicos/Servicos";
import CorpoClinico from "./pages/CorpoClinico/CorpoClinico";
import Contato from "./pages/Contato/Contato";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/corpo-clinico" element={<CorpoClinico />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;