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
            <div className="div-btn-acai">
        <button
            className="btn-simple-acai"
            onClick={async () => {
                try {
                    navigate("/prova01")
                } catch (err) {
                    
                }
            }}>
            VOLTAR
        </button>
    </div>
    </section>

        </main>
    )
}
