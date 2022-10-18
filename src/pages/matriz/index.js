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