"use client"
import style from "./main.module.css";
import { useEffect,useState } from "react";


function Poke(){
    const [pokemon,setPokemon]=useState("./vercel");
    const url="https://pokeapi.co/api/v2/pokemon/diglett";
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json)
        .then()
    },[])
    return(
        <div className={style.main}>
            <div className={style.box1}>
                <div className={style.my}>

                </div>
                <div className={style.name}>

                </div>
                <div className={style.image}>

                </div>
            </div>
            <div className={style.box2}>

            </div>
        </div>
    )
}
export default Poke;