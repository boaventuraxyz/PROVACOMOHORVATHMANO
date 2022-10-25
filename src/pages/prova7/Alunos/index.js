import { useState } from "react"
import '../../../../src/common.scss'



export default function Alunos(){

    const[qtd, setQtd]= useState()
    const[aluno, setAluno]= useState([])
    const[nota, setNota]= useState([])

    function Alunos() {
        let aluno=[]

        for (let i =0; i < qtd ; i++){
            aluno[i]= 0;

        } 
        setAluno(aluno)

    }


    return (
        <main>
            <h1>Muitas coisa</h1>
            <p>Quantidade de Alunos:</p>
            <input value={qtd} type="number" onChange={e=> setQtd(Number(e.target.value))}/>
            <button onClick={Alunos}>OK</button>

           <div>
            {aluno.map((item,pos)=>

                <div>
                    <p>Aluno {pos+1}</p>
                    <input type="text" />
                </div>

            )}
           </div>

        </main>
    )
}