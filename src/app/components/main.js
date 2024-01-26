"use client"
import style from "./main.module.css";
import { useEffect,useState } from "react";
import Image from "next/image";

function Poke(){
    const [pokemon,setPokemon]=useState("/vercel.svg");
    const [name,setName]=useState("name");
    const [tipo,setTipo]=useState("tipo");
    const [tipo1,setTipo1]=useState("tipo1");
    const [height,setHeight]=useState("height");
    const [id,setId]=useState("id");
    const [weight,setWeight]=useState("weight");
    const [habil1,setHabil1]=useState("habil1");
    const [habil2,setHabil2]=useState("habil2");
    const [hp,setHp]=useState("hp");
    const [ataque,setAtaque]=useState("ataque");
    const [defensa,setDefensa]=useState("defensa");
    const [velocidad,setVelocidad]=useState("velocidad")
    const url="https://pokeapi.co/api/v2/pokemon/2";

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{setPokemon(data.sprites.front_default);
            setName(data.species.name);
            setTipo(data.types[0].type.name);
            setTipo1(data.types[1].type.name);
            setHeight(data.height);
            setWeight(data.weight);
            setHabil1(data.abilities[0].ability.name);
            setHabil2(data.abilities[1].ability.name);
            setHp(data.stats[0].base_stat);
            setAtaque(data.stats[1].base_stat);
            setDefensa(data.stats[2].base_stat);
            setVelocidad(data.stats[5].base_stat);
            setId(data.id);
        
        })
    },[])
    return(
        <div className={style.main}>
            <div className={style.box1}>
                <div className={style.my}>
                    <h1>My Pokemon</h1>
                </div>
                <div className={style.name}>
                    <h2>{name}</h2>
                    <div className={style.bulto}></div>
                    <div className={style.id}>{id}</div>
                </div>
                <div className={style.image}>
                <Image src={pokemon} alt="pokemon" width={250} height={250}></Image>
                </div>
            </div>
            <div className={style.box2}>
                <div className={style.minbox1}>
                <h1 className={style.h1}>About</h1>

                <p className={style.p}>Type: </p>
                <p className={style.p}>Height: </p>
                <p className={style.p}>Weight: </p>
                <p className={style.p}>Abilities:</p>

                <h1 className={style.h1}>Stats</h1>

                <p className={style.p}>HP:   </p>
                <p className={style.p}>Attack: </p>
                <p className={style.p}>Defense: </p>
                <p className={style.p}>Speed: </p>
                </div>
                <div className={style.minbox2}>
                    <h1>.</h1>
                    <h4 className={style.p1}>{tipo},{tipo1}</h4>
                    <h4 className={style.p1}>{height/10} m</h4>
                    <h4 className={style.p1}>{weight/10} kg</h4>
                    <h4 className={style.p1}>{habil1},{habil2}</h4>
                    <h1>.</h1>
                    <h4 className={style.p1}>{hp}</h4>
                    <h4 className={style.p1}>{ataque}</h4>
                    <h4 className={style.p1}>{defensa}</h4>
                    <h4 className={style.p1}>{velocidad}</h4>
                </div>
                
            </div>
        </div>
    )
}
export default Poke;