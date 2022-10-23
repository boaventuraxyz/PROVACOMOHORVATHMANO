import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Sorveteria() {
    const navigate = useNavigate();
    const [gramas, setGramas] = useState()
    const [ final, setFinal] = useState()
   

    function Calcular() {
        try{

        
        let total = ''
        
       if( gramas <= 0){
        alert('peso invalido')

       }
        if (gramas > 1000) {
            total = (gramas) * 0.03
        }
        else{
            total = (gramas) * 0.035
        }

    setFinal(total.toFixed([2]))}
    catch(err){
        setFinal("safdiuawfdsoijh")

    }
    }

    useEffect(() => {
        Calcular()
    }, [gramas])

    return(
        <main>
            <h1>
                Sorveteria
            </h1>

            <div>
                Gramas: <input type='number' value={gramas} onChange={e => setGramas(Number(e.target.value))}/>
            </div>

            
            <div>
                O total é {final}
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
