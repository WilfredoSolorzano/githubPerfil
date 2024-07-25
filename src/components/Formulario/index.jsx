import { useEffect } from "react";
import { useState } from "react"

const Formulario=()=>{
    const [materiaA,setMateriaA]=useState(0);
    const [materiaB,setMateriaB]=useState(0);
    const [materiaC,setMateriaC]=useState(0);
    const [nome,setNome]=useState('');

    useEffect(()=>{
        console.log("O componente inicio");

        return()=>{
            console.log("O componente finalizo")
        }
    },[]);

    useEffect(()=>{
        console.log("O estado nome mudou")
    },[nome])

    useEffect(()=>{
        console.log("materia A mudou para: "+ materiaA)
    },[materiaA,materiaB,materiaC])

    const alteraNome =(evento)=>{
        setNome(estadoAnterior =>{
            console.log(estadoAnterior);
            return evento.target.value;
        })
    }

    const renderizaResultados= ()=>{
        const soma = materiaA+materiaB+materiaC;
        const media= soma / 3 ;

        if(media > 7){
            return (
                <p>Olá {nome}, Voce foi aprovado</p>
            )
        }else{
            return(
                <p>Olá {nome}, Voce não foi aprovado</p>
            )
        }
    }

    return(
        <form>
            <ul>
               {[1,2,3,4,5].map(item=>(
                <li key={item}>{item}</li>
               ))} 
            </ul>
            <input type="text" placeholder="Seu Nome"  onChange={alteraNome}/>
           <input type="number" placeholder="Nota matéria A" onChange={evento=> setMateriaA(parseInt(evento.target.value))}/> 
           <input type="number" placeholder="Nota matéria B" onChange={evento=> setMateriaB(parseInt(evento.target.value))}/> 
           <input type="number" placeholder="Nota matéria C" onChange={evento=> setMateriaC(parseInt(evento.target.value))}/>
           {renderizaResultados()}
        </form>
    )
}

export default Formulario