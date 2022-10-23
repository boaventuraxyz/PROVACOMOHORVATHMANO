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
            

           
                <button class="cta"  onClick={async () => {
                try {
                    navigate("/prova04")
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