import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Cafe(){

    const [alunos, setAlunos] = useState();
    const [capacidade, setCapacidade] = useState();;
    const [ml, setMl] = useState();
    const [total, setTotal] = useState();

    const navigate = useNavigate();

    function Cafes(){
        try{
            if(alunos >= 0 && capacidade >= 0 && ml>= 0 ){

                let a = 1;
                let b = (alunos * ml) / 1000;
                let c = capacidade * a;
                while (c < b) {
                    a++;
                    c = capacidade * a
                }
                setTotal(c)

                }}
                catch(err){
                    setTotal(err)

                }
    }

    useEffect(() => {
        Cafes()
    }, [alunos, capacidade, ml])


    
    return(
        <main>
            <section>
                <h1>LITROS DE CAFÉ</h1>
                <input  placeholder="Quantidade de alunos" value={alunos} onChange={(e) => setAlunos(e.target.value)} />
                <input   placeholder="Capacidade da cafeteira" value={capacidade} onChange={(e) => setCapacidade(e.target.value)} />
                <input   placeholder="Mililitros por aluno"  value={ml} onChange={(e) => setMl(e.target.value)} />
                <input   placeholder="Total de litros" disabled="disabled" value={total} />
                <button class="cta"  onClick={async () => {
                try {
                    navigate("/prova05")
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