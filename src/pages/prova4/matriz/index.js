import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Matrizs(){
    const [base, setbase] = useState();
    const [alt, setaltura] = useState();
    const [resposta, steResposta] = useState([]);

    function Matriz() {
        try{

        
        let matriz = [];
        let array =[];

        for (let i = 0; i < base; i++) {
            array[i] = "*";   
            
            for (let j = 0; j < alt; j++) {
                matriz[j] = new Array (array);
            }}
            steResposta(matriz);
        }
        catch{
            steResposta("ugisaefgdsafhgiuo")
        }
        

        
        }

    const navigate = useNavigate()
    return(
        <main>
            <h1>Matriz</h1>

            <input type="text"  placeholder='base' value={base}  onChange={ e => setbase(Number(e.target.value))} />
            <input type="text"  placeholder='altura' value={alt}  onChange={ e => setaltura(Number(e.target.value))} />
            <button classname='btn-smp'onClick={Matriz}> Faça!</button>
            <div className='forminha'>{resposta.map(item => <p>{ item }</p>)}</div>

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