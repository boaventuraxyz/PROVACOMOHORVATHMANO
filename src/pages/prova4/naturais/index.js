import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './'

export default function Febre(){
    const[inicio, setInicio] = useState();
    const[fim, setFim] = useState();

    const[resposta, setResposta] = useState();

    function Naturais() {
        try{

        if(inicio>=0 && fim<=9){

        
        let x = [];
        let e = 0;
        for(let i = inicio; i <= fim; i++){
            x[e] = i;
            e++;
        }
        setResposta(x)}
    else{
        setResposta("apenas números naturais(de 0 à 9)")
    }}

        catch{
            setResposta("sexo")
        }
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
                    navigate("/prova04")
                } catch (err) {
                    
                }
            }}>
            VOLTAR
        </button>
    </div>
  

        </main>   
    )
}