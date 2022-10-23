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

            <button
            className="btn-simple-acai"
            onClick={async () => {
                try {
                    navigate("/prova02")
                } catch (err) {
                    
                }
            }}>
           VOLTAR
        </button>
        </main>
    )
}