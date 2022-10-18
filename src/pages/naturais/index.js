import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Febre(){
    const[inicio, setInicio] = useState();
    const[fim, setFim] = useState();

    const[resposta, setResposta] = useState();

        function Naturais(){
           let x = [inicio];
             for(let i = 1; inicio <= fim ; i++){
               x[i] = x
                x++
            }
            setResposta([x])
        }

       
        
        useEffect(() => {
            Naturais()
        }, [inicio, fim])

        const navigate = useNavigate();
    return(
        <main>
            <h1>Numeros naturais</h1>

            <input  value={inicio} type="number"  onChange={(e) => setInicio(e.target.value)}/>

            <input  value={fim} type="number" onChange={(e) => setFim(e.target.value)}/>

            
                <input disabled="disabled"  value={resposta} />
            

           
            <div className="div-btn-acai">
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
    </div>
  

        </main>   
    )
}