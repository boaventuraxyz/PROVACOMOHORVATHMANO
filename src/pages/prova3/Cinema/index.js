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
	);
}
