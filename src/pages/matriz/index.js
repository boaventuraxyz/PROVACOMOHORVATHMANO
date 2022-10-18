import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Febre(){
    const[qtd, setQtd] = useState()

    const[res, setRes] = useState()


    function Linha(){
        let x = [];
        let e = 0

        for(let i = 1; i <= qtd; i++){
            x[e] = "*"
            e++
        }
        setRes(x)
    }

    useEffect(() => {
        Linha()
    }, [qtd])
    const navigate = useNavigate()
    return(
        <main>
            <h1>Linha</h1>

            <input value={qtd} onChange={(e) => setQtd(e.target.value)} />
            <input value={res} disabled="disabled" />

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