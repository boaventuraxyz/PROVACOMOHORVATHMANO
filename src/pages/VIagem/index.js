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
            viagem

            <div>
            <label>capacidade</label>  <input className="cx1" type='number' value={capac} onChange={e => setCapac(Number(e.target.value))}/>
            </div>

            
            <div>
            <label>consumo</label> <input className="cx2" type='number' value={consumo} onChange={e => setConsumo
                    (Number(e.target.value))}/>
            </div>

            
            <div>
            <label>distância</label><input className="cx3" type='number' value={dist} onChange={e => setDist(Number(e.target.value))}/>
            </div>

           

            <div>
                <br/>
                O total é {total}
            </div>

            <section className="sec-1-acai">
            <div className="div-btn-acai">
        <button
            className="btn-simple-acai"
            onClick={async () => {
                try {
                    navigate("/")
                } catch (err) {
                    
                }
            }}>
            Voltar pra home
        </button>
    </div>
    </section>

        </main>
    )
}