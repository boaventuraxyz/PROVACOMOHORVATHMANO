import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Febre(){
    const [temp, setTemp] = useState()

    const [res, setRes] = useState()
    const navigate = useNavigate();


    function febre(){
        try{
        if(temp >= 41){
            setRes("Hipertermia")
        } else if(temp >= 39.6 && temp < 41){
            setRes("Febre Alta")
        } else if(temp >= 37.6 && temp < 39.6 ){
            setRes("Febre")
        } else if(temp >= 36 && temp < 37.6){
            setRes("Normal")
        } else if (temp < 36 && temp >= 20){
            setRes("Hiportermia")
        } else {
            setRes("ja morreu pai")
        }}
        catch(err){
            setRes("num daaaa")

        }
    }

    useEffect(() => {
        febre()
    }, [temp])


    return(
        <main>
            <h1>
                Febre
            </h1>
            <input placeholder="temperatura" value={temp} onChange={(e) => setTemp(e.target.value)} />

            to com febre? {res}

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