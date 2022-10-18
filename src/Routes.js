import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import VendaAcai from "./pages/VendaAcai";
import Sorveteria from "./pages/Sorveteria";
import Signo from "./pages/Signo";
import SalarioLiquido from "./pages/SalarioLiquido";
import Viagem from "./pages/VIagem";
import Febre from "./pages/Febre";
import Orca from "./pages/Orcamento";
import Cinema from "./pages/Cinema"
import Naturais from "./pages/naturais"
import Linha from "./pages/Linha"
import Matrizs from "./pages/matriz";

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
			</Routes>
		</BrowserRouter>
	);
}
