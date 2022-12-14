import React from "react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

export default function Acai() {
    const [qtdPeq, setQtdPeq] = useState()
    const [ qtdMed, setQtdMed] = useState()
    const [qtdGrande, setQtdGrande] = useState()

    const [desc, setDesc] = useState()
    const [total, setTotal] = useState()

    function Calcular() {
        try{

        
        if(qtdPeq >= 0 && qtdMed >= 0 && qtdGrande >= 0 && desc >=0){
        let total = qtdPeq * 13.50 + qtdMed * 15 + (qtdGrande * 17.50);
        let desconto = total * desc / 100;

        let final = total - desconto;
        setTotal(final)
    }


        
        else{
            setTotal('invaaliddoooo')
        }}
        catch(err){
            setTotal("iuhgfdsgauhasdfguhijrsa")

        }
    }

    useEffect(() => {
        Calcular()
    }, [qtdPeq, qtdMed, qtdGrande, desc])
    const navigate = useNavigate();

    return(
        <main className="page-acai">
           <h1>
            Acai
           </h1>

            <div>
            <label>Quantidade Pequena:</label>  <input className="cx1" type='number' value={qtdPeq} onChange={e => setQtdPeq(Number(e.target.value))}/>
            </div>

            
            <div>
            <label>Quantidade Média:</label> <input className="cx2" type='number' value={qtdMed} onChange={e => setQtdMed
                    (Number(e.target.value))}/>
            </div>

            
            <div>
            <label>Quantidade Grande:</label><input className="cx3" type='number' value={qtdGrande} onChange={e => setQtdGrande(Number(e.target.value))}/>
            </div>

            
            <div>
            <label>Desconto:</label><input className="cx4" type='number' value={desc} onChange={e => setDesc(Number(e.target.value))}/>
            </div>

            <div>
                <br/>
                O total é {total}
            </div>

            <section className="sec-1-acai">
            <button class="cta"  onClick={async () => {
                try {
                    navigate("/prova01")
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
