import React from "react";
import { useNavigate } from "react-router-dom";
import "../../common.scss"


export default function Index(){
   const navigate = useNavigate();
    
    return(
        <main>
        
        <section className="sec-1-acai">
            <div className="div-btn-acai">
        <button
            className="btn-simple-acai"
            onClick={async () => {
                try {
                    navigate("/VendaAcai")
                } catch (err) {
                    
                }
            }}>
            AÇAI 
        </button>
    </div>
    </section>



    <section className="sec-2-signo">
    <div className="div-btn-signo">
        <button
            className="btn-simple-signo"
            onClick={async () => {
                try {
                    navigate("/Signo")
                } catch (err) {
                    
                }
            }}>
           LIBRA
        </button>
    </div>
    

    </section>


    
    <section className="sec-3-sorv">
    <div className="div-btn-sorv">
        <button
            className="btn-simple-sorv"
            onClick={async () => {
                try {
                    navigate("/Sorveteria")
                } catch (err) {
                    
                }
            }}>
          SORVETERIA
        </button>
    </div>

    
        
            <div className="div-btn-salario">
        <button
            className="btn-simple-salario"
            onClick={async () => {
                try {
                    navigate("/SalarioLiquido")
                } catch (err) {
                    
                }
            }}>
            SALARIO 
        </button>
    </div>
    




    
    <div className="div-btn-viagem">
        <button
            className="btn-simple-viagem"
            onClick={async () => {
                try {
                    navigate("/VIagem")
                } catch (err) {
                    
                }
            }}>
            PARADAS
        </button>
    </div>
    
    <div className="div-btn-febre">
        <button
            className="btn-simple-febre"
            onClick={async () => {
                try {
                    navigate("/febre")
                } catch (err) {
                    
                }
            }}>
            FEBRE
        </button>
    </div>

    </section>


    <section className="sec-1-acai">
            <div className="div-btn-acai">
        <button
            className="btn-simple-acai"
            onClick={async () => {
                try {
                    navigate("/Orcamento")
                } catch (err) {
                    
                }
            }}>
            ORÇAMENTO
        </button>
    </div>
    </section>

    <div className="div-btn-febre">
        <button
            className="btn-simple-febre"
            onClick={async () => {
                try {
                    navigate("/Cinema")
                } catch (err) {
                    
                }
            }}>
            INGRESSO
        </button>
    </div>
    <div className="div-btn-febre">
        <button
            className="btn-simple-febre"
            onClick={async () => {
                try {
                    navigate("/naturais")
                } catch (err) {
                    
                }
            }}>
            NUMEROS NATURAIS
        </button>
    </div>

    <div className="div-btn-febre">
        <button
            className="btn-simple-febre"
            onClick={async () => {
                try {
                    navigate("/linha")
                } catch (err) {
                    
                }
            }}>
                LINHA
        </button>
    </div>


    <div className="div-btn-febre">
        <button
            className="btn-simple-febre"
            onClick={async () => {
                try {
                    navigate("/Matriz")
                } catch (err) {
                    
                }
            }}>
                MATRIZ
        </button>
    </div>


    <div className="div-btn-febre">
        <button
            className="btn-simple-febre"
            onClick={async () => {
                try {
                    navigate("/Cafe")
                } catch (err) {
                    
                }
            }}>
                CAFÉ
        </button>
    </div>



    <div className="div-btn-febre">
        <button
            className="btn-simple-febre"
            onClick={async () => {
                try {
                    navigate("/Juros")
                } catch (err) {
                    
                }
            }}>
                JUROS
        </button>
    </div>
    </main>
    
    );
}