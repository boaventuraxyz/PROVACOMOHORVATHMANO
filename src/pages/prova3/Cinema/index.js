import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Cinema() {
	const [meia, setMeia] = useState();
	const [inteira, setInteira] = useState();
	const [dia, setDia] = useState();
	const [nacionalidade, setNacionalidade] = useState(true);

	const [total, setTotal] = useState();


    function Compra() {
        
        if (nacionalidade == true) {
            setTotal((inteira + meia) * 5)
        } else {
            if (dia == "quarta-feira" || dia === "quarta") {
                setTotal((inteira + meia) * 14.25)
            } else {
                setTotal(inteira * 28.5 + meia * 14.25)
            }
        }
    }
    
    useEffect(() => {
        Compra()
    }, [inteira, meia, nacionalidade, dia])

    const navigate = useNavigate();
	return (
		<main>
            <h1>Cinema</h1>
			<input type="number" value={meia} onChange={(e) => setMeia(Number(e.target.value))} placeholder="meia" />
			<input type="number" value={inteira} onChange={(e) => setInteira(Number(e.target.value))} placeholder="inteira" />
			<input type="text" value={dia} onChange={(e) => setDia(e.target.value)} placeholder="dia" />
            <div>
                <label>Brasil?</label>
			<input type="checkbox" checked={nacionalidade} onChange={(e) => setNacionalidade(e.target.checked)} placeholder="nacionalidade" />
            </div>
            --o total é {total}
        
            <button
            className="btn-simple-acai"
            onClick={async () => {
                try {
                    navigate("/prova03")
                } catch (err) {
                    
                }
            }}>
            VOLTAR
        </button>
		</main>
	);
}
