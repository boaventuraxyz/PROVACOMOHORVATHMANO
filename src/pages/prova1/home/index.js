import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../../src/common.scss"


export default function Index (){
    const navigate = useNavigate();

    return(
<main>
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
        </button></div>

        <button class="cta"  onClick={async () => {
                try {
                    navigate("/")
                } catch (err) {
                    
                }
            }}>
    <span class="hover-underline-animation"> Go to home </span>
    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
    </svg>
</button>



</main>
    )
}