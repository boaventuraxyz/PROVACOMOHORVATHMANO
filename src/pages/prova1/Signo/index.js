import React from "react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";


export default function Signo() {
    const [mes, setMes] = useState('')
    const [ dia, setDia] = useState('')
    const [final, setFinal] = useState('')

    

    function Calcular() {
        try{
            if(dia<=0 || dia >31){
                setFinal("dia invalido")


            }
        else if(mes == 'setembro' && dia >= 23 && dia >=0|| mes =='outubro' && dia <=22 && dia <= 31){
            setFinal('seu signo é libra doidão')

        }
        
        else{
            setFinal('seu signo n é libra mané')
        }}
        catch(err){
            setFinal("tetetetetentou mas n deu certo")

        }

      
    }

    useEffect(() => {
        Calcular()
    }, [mes, dia])
    const navigate = useNavigate();

    return(
        <main>
            <h1>
                Signo
            </h1>

            <div>
                mês  <input type='text' value={mes} onChange={e => setMes(e.target.value)}/>
            </div>

            
            <div>
                dia <input type='number' value={dia} onChange={e => setDia
                    (Number(e.target.value))}/>
            </div>


            <div>
                
                 {final}
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
