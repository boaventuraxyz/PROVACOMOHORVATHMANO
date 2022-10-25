import { useState } from "react"
import '../../../../src/common.scss'
import { Media } from "../../../services"



export default function Alunos(){

    const[qtd, setQtd]= useState()
    const[aluno, setAluno]= useState([])
    const[nota, setNota]= useState([])
    const[res, setRes] = useState();



    function medias(){
        const r = Media(nota)
        setRes(r)

    }

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
                    <input type="text"  value= {item.nota}/>
                </div>

            )}
           </div>
           <div>
            <button onClick={medias}> CALCULAR</button>
            <p>Média é {res}</p>
           </div>

        </main>
    )
}