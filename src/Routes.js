import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import VendaAcai from "./pages/prova1/VendaAcai";
import Sorveteria from "./pages/prova1/Sorveteria";
import Signo from "./pages/prova1/Signo";
import SalarioLiquido from "./pages/prova2/SalarioLiquido";
import Viagem from "./pages/prova2/VIagem";
import Febre from "./pages/prova2/Febre";
import Orca from "./pages/prova3/Orcamento";
import Cinema from "./pages/prova3/Cinema"
import Naturais from "./pages/prova4/naturais"
import Linha from "./pages/prova4/Linha"
import Matrizs from "./pages/prova4/matriz";
import Cafe from "./pages/prova5/Cafe";
import Juros from "./pages/prova6/Montante";
import Alunos from "./pages/prova7/Alunos";
import Prova01 from "./pages/prova1/home";
import Prova02 from "./pages/prova2/home"
import Prova03 from "./pages/prova3/home"
import Prova04 from "./pages/prova4/home"
import Prova05 from "./pages/prova5/home"
import Prova06 from "./pages/prova6/home"
import Prova07 from "./pages/prova7/home"

export default function Index() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/VendaAcai" element={<VendaAcai />}></Route>
				<Route path="/Sorveteria" element={<Sorveteria />}></Route>
				<Route path="/Signo" element={<Signo />}></Route>
				<Route path="/SalarioLiquido" element={<SalarioLiquido />}></Route>
				<Route path="/VIagem" element={<Viagem />}></Route>
                <Route path="/febre" element={<Febre />}></Route>
                <Route path='/Orcamento' element={<Orca />}></Route>
                <Route path='/Cinema' element={<Cinema/>}></Route>
				<Route path='/naturais' element={<Naturais/>} />
				<Route path='/linha' element={<Linha/>} />
				<Route path='/Matriz' element={<Matrizs/>} />
				<Route path='/Cafe' element={<Cafe/>} />
				<Route path='/Juros' element={<Juros/>} />
				<Route path='/Alunos' element={<Alunos/>} />
				<Route path='/Prova01' element={<Prova01/>} />
				<Route path='/Prova02' element={<Prova02/>} />
				<Route path='/Prova03' element={<Prova03/>} />
				<Route path='/Prova04' element={<Prova04/>} />
				<Route path='/Prova05' element={<Prova05/>} />
				<Route path='/Prova06' element={<Prova06/>} />
				<Route path='/Prova07' element={<Prova07/>} />
			</Routes>
		</BrowserRouter>
	);
}
