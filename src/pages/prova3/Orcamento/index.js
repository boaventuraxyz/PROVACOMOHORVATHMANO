import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Orca() {
    const [ganhos, setGanhos] = useState();
    const [gastos, setGastos] = useState();

    const [resposta, setResposta] = useState();

    function Orcamento() {
        let x = gastos / ganhos * 100;

        if (x >= 0 && x <= 20) {
            setResposta("Parabens, esta gerenciando bem seu orcamento")
        } else if (x >= 21 && x <= 50) {
            setResposta("muito bem, seus gastos nao ultrapassam metade dos ganhos")
        } else if (x >= 51 && x <= 80) {
            setResposta("Atencao, melhor conter seus gastos")
        } else if (x >= 81 && x <= 100) {
            setResposta("cuidado, seu orcamento pode ficar comprometido")
        } else {
            setResposta("fudeu!!!")
        }
    }

    useEffect(() => {
        Orcamento()
    }, [ganhos, gastos])

    const navigate = useNavigate();
    return (
        <main>
            <h1>
                Orçamento
            </h1>
            <input value={ganhos} placeholder="ganhos" type="number" onChange={(e) => setGanhos(e.target.value)} />
            <input type="number" value={gastos} placeholder="gastos" onChange={(e) => setGastos(e.target.value)} />

            <p>-- {resposta}  </p>
            <button class="cta"  onClick={async () => {
                try {
                    navigate("/prova03")
                } catch (err) {
                    
                }
            }}>
    <span class="hover-underline-animation"> Questions </span>
    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
    </svg>
</button>
        </main>
    )

}