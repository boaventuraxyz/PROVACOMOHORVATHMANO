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
                    navigate("/Prova01")
                } catch (err) {
                    
                }
            }}>
            PROVA 01
        </button>
    </div>
    </section>


    <section className="sec-1-acai">
            <div className="div-btn-acai">
        <button
            className="btn-simple-acai"
            onClick={async () => {
                try {
                    navigate("/Prova02")
                } catch (err) {
                    
                }
            }}>
            PROVA 02
        </button>
    </div>
    </section>


    <section className="sec-1-acai">
            <div className="div-btn-acai">
        <button
            className="btn-simple-acai"
            onClick={async () => {
                try {
                    navigate("/Prova03")
                } catch (err) {
                    
                }
            }}>
            PROVA 03
        </button>
    </div>
    </section>


    <section className="sec-1-acai">
            <div className="div-btn-acai">
        <button
            className="btn-simple-acai"
            onClick={async () => {
                try {
                    navigate("/Prova04")
                } catch (err) {
                    
                }
            }}>
            PROVA 04
        </button>
    </div>
    </section>
   
 <section className="sec-1-acai">
            <div className="div-btn-acai">
        <button
            className="btn-simple-acai"
            onClick={async () => {
                try {
                    navigate("/Prova05")
                } catch (err) {
                    
                }
            }}>
            PROVA 05
        </button>
    </div>
    </section>

    <section className="sec-1-acai">
            <div className="div-btn-acai">
        <button
            className="btn-simple-acai"
            onClick={async () => {
                try {
                    navigate("/Prova06")
                } catch (err) {
                    
                }
            }}>
            PROVA 06
        </button>
    </div>
    </section>
 


 
    </main>
    
    );
}