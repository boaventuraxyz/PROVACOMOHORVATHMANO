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
            
            <button
            className="btn-simple-acai"
            onClick={async () => {
                try {
                    navigate("/")
                } catch (err) {
                    
                }
            }}>
            VOLTAR
        </button>
        </main>
    )

}