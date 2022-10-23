import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Viagem(){
        const [capac, setCapac] = useState()
        const [consumo, setConsumo] = useState()
        const [dist, setDist ] = useState() 

        
    const [total, setTotal] = useState()

    const navigate = useNavigate();

        function Paradas(){
            try{
                if(capac >= 0 && consumo >= 0 && dist >= 0){
                    
                    let gasosa = dist / capac;
                    let resultado = gasosa/ consumo;

                    setTotal(Math.ceil(resultado));


                }else {
                    setTotal("n pode negativo corno")
                }
            } catch(err){
                setTotal("deu erro");
            }
        }

        useEffect(() => {
            Paradas()
        }, [capac, consumo, dist])

    return(
        <main className="page-acai">
            <h1>Paradas</h1>

            <div>
            <label>Capacidade</label>  <input className="cx1" type='number' value={capac} onChange={e => setCapac(Number(e.target.value))}/>
            </div>

            
            <div>
            <label>Consumo</label> <input className="cx2" type='number' value={consumo} onChange={e => setConsumo
                    (Number(e.target.value))}/>
            </div>

            
            <div>
            <label>Distância</label><input className="cx3" type='number' value={dist} onChange={e => setDist(Number(e.target.value))}/>
            </div>

           

            <div>
                <br/>
                O total é {total}
            </div>

            <section className="sec-1-acai">
            <button class="cta"  onClick={async () => {
                try {
                    navigate("/prova02")
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