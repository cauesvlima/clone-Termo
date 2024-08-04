import React, { useEffect, useState } from 'react';
import styles from "./styles.module.css";
import { Jogo } from "../components/jogo";
import { KeyBoard } from "../components/teclado";
import { Palavras } from '../components/palavras';
import { GeraPalavra } from '../components/geraPalavra';

export const Termo = () => {
    const [palavraDoDia, setPalavraDoDia] = useState();
    const [camposUsados, setCamposUsados] = useState();
    useEffect(()=>{
        GeraPalavra();
    },[])
    useEffect(()=>{
        setPalavraDoDia(localStorage.getItem('palavra'));
    })

    const [palavra, setPalavra] = useState([]);
    const handleSubmit = () => {
        let stringWorld = palavra.join('');
        stringWorld=stringWorld.toLowerCase();
        console.log(stringWorld);
        const response = Palavras(stringWorld);
        if(response){
            if(stringWorld===palavraDoDia){
                alert("você ganhou");
            } else {

                let palavraArray = palavraDoDia.toUpperCase();
                palavraArray = palavraArray.split('');


            }
        } else {
            alert("Palavra inválida!")
            console.log(response)
        }
    };

    const recebePalavra = (dados) =>{
        setPalavra(dados);
    }

   

    return (
        <div className={styles.body}>
            <div className={styles.header}>TERMO</div>
            <div className={styles.gameContainer}>
                <Jogo onSubmit={handleSubmit} palavra={recebePalavra}/>
            </div>
            <div className={styles.keyboardContainer}>
                <KeyBoard handleSubmit={handleSubmit} />
            </div>
        </div>
    );
};
