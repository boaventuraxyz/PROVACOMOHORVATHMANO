import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function SalarioLiquido() {
    const [salario, setSalario] = useState('')
    const [bonus, setBonus] = useState('')
    const [desc, setDesc] = useState('')

    const [total, setTotal] = useState(0)


    function CalcularSalario() {
        try{
        if (salario >= 0 && bonus >= 0 && desc >= 0) {
           
            let total = salario + ((salario/100) * bonus);
            let final = total - desc;

           
            setTotal(final)
        }

        else {
            setTotal('invalidoo')
        }}
        catch(err){
            setTotal("erorr")

        }
    }


    useEffect(() => {
        CalcularSalario()
    },[salario, bonus, desc])
    const navigate = useNavigate();

    return(
        <main>
            <h1>Calcular Salário Líquido</h1>

            <div>
            <label>Seu Salário</label>
             <input type="number" value={salario} onChange={e => setSalario(Number(e.target.value))}/>
            </div>

            <div>
            <label>Bônus</label>
            <input type="number" value={bonus} onChange={e => setBonus(Number(e.target.value))}/>
            </div>

            <div>
            <label>Desconto</label>
            <input type="number" value={desc} onChange={e => setDesc(Number(e.target.value))}/>
            </div>

            <div>
                <label>
                    o total é {total}
                </label>
            </div>
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
        </main>
    )
}