import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Linhas(){
    const[qtd, setQtd] = useState()

    const[res, setRes] = useState()


    function Linha(){
        try{

        
        let x = [];
        let e = 0

        for(let i = 1; i <= qtd; i++){
            x[e] = "*"
            e++
        }
        setRes(x)}
        catch{
            setRes("sexo")
        }
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