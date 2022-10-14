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

            <button
            className="btn-simple-acai"
            onClick={async () => {
                try {
                    navigate("/")
                } catch (err) {
                    
                }
            }}>
            VOLTAR
        </button>
        </main>
    )
}