import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Juros(){
const [capital, setCapital] = useState();
const [entrada, setEntrada] = useState();
const [taxa, setTaxa] = useState();
const [tempo, setTempo] =  useState();

const [montante,setMontante] = useState();
const [juros,setJuros] = useState();
const [parcela,setParcela] = useState();
const navigate = useNavigate();


function Montante(){

    try{
        if(capital >= 0 && taxa >= 0 && tempo >= 0){
            let entradacap =  capital - entrada;
            let newtaxa = taxa / 100;
            let mont = entradacap * ((1 + newtaxa) ** tempo);
            let juro = mont - entradacap;
            let parc = mont / (tempo * 12);




            setJuros(juro.toFixed(2));
            setParcela(parc.toFixed(2));
            setMontante(mont.toFixed(2))
        }

    }
    catch{

    }

}
useEffect(() => {
    Montante()
}, [entrada, capital, taxa, tempo])






return(
    <main>
            <section>
                <h1>JUROS COMPOSTOS</h1>
                <input  placeholder="Capital" value={capital} onChange={(e) => setCapital(e.target.value)} />
                <input  placeholder="Entrada" value={entrada} onChange={(e) => setEntrada(e.target.value)} />
                <input   placeholder="Taxa" value={taxa} onChange={(e) => setTaxa(e.target.value)} />
                <input   placeholder="Tempo em anos "  value={tempo} onChange={(e) => setTempo(e.target.value)} />
                <input   placeholder="Montante" disabled="disabled" value={montante} />
                <input   placeholder="Juros" disabled="disabled" value={juros} />
                <input   placeholder="Parcela" disabled="disabled" value={parcela} />
                <button class="cta"  onClick={async () => {
                try {
                    navigate("/prova06")
                } catch (err) {
                    
                }
            }}>
    <span class="hover-underline-animation"> Questions </span>
    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
    </svg>
</button>
            </section>
        </main>
)

}