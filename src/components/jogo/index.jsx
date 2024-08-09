import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { lineStore } from "../../store/line-store";
export const Jogo = ({ palavra, troca, palavraDoDia, palavraEnviada }) => {

const [alteraLetra, setAlteraLetra] = useState();
    const [line, setLine] = useState(troca);
    const [atualLine, setAtualLine] =useState(false)
    useEffect(()=>{
        setLine(troca);
    },[troca]);

    const handleChange = (event) => {
        console.log(line);
        const { id, value } = event.target;
        setAlteraLetra(event);
        let valor = value;
        event.target.value = valor.toUpperCase();
        if (value.length === 1) {
            const currentIndex = parseInt(id.slice(1), 10);
            const nextId = `${line}${currentIndex + 1}`;
            const nextInput = document.querySelector(`input[id="${nextId}"]`);
            if (nextInput) {
                nextInput.focus();
            }


        }
    };

    useEffect(() => {
        const inputs = document.querySelectorAll('input[id^='+line+']');
        const values = [];

        inputs.forEach(input => {
            const id = input.id;
            if (new RegExp(`^${line}[1-6]$`).test(id)) {
                values.push(input.value);
            }
        });
        const allFilled = values.every(value => value.trim() !== '');
        if(allFilled){

            palavra(values);
        }
        console.log("Palavra", values)

    }, [alteraLetra])

    const handleKeyDown = (event) => {
        if (event.key === 'Backspace') {
            const { id, value } = event.target;
            if (value) {
                event.target.value = "";
            } else {
                const currentIndex = parseInt(id.slice(1), 10);
                const lastId = `${line}${currentIndex - 1}`;
                if (currentIndex - 1 !== 0) {
                    const lastInput = document.querySelector(`input[id="${lastId}"]`);
                    lastInput.value = "";
                    lastInput.focus();
                }
            }
            setAlteraLetra(event);
        }
    }



    //Validação de posição

    useEffect(()=>{
        if(palavraEnviada && palavraDoDia){
        const result = palavraDoDia.map((item, index) => {
            return item === palavraEnviada[index];
        });
        const conjunto1 = new Set(palavraDoDia);
        const resultados = palavraEnviada.map(valor => conjunto1.has(valor));

        for (let i = 1; i <= 5; i++) {
    const input = document.getElementById(line + i);
    input.setAttribute('data-correct', result[i - 1]);
    input.setAttribute('data-exists', resultados[i - 1]);
}


}

    },[palavraDoDia])


    return (
        <div className={styles.gameBody}>
            <div className={styles.gameList}>
                <div className={styles.gameLine}>
                    <div className={styles.containerInput}>
                        <input type="text" id='a1' onChange={handleChange}  disabled={troca !== 'a'} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='a2' onChange={handleChange} disabled={troca !== 'a'} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='a3' onChange={handleChange} disabled={troca !== 'a'} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='a4' onChange={handleChange} disabled={troca !== 'a'} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='a5' onChange={handleChange} disabled={troca !== 'a'} onKeyDown={handleKeyDown} maxLength="1" />
                    </div>
                </div>
                <div className={styles.gameLine}>
                    <div className={styles.containerInput}>
                        <input type="text" id='b1' onChange={handleChange} disabled={troca !== 'b'} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='b2' onChange={handleChange} disabled={troca !== 'b'} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='b3' onChange={handleChange} disabled={troca !== 'b'} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='b4' onChange={handleChange} disabled={troca !== 'b'} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='b5' onChange={handleChange} disabled={troca !== 'b'} onKeyDown={handleKeyDown} maxLength="1" />
                    </div>
                </div>
                <div className={styles.gameLine}>
                    <div className={styles.containerInput}>
                        <input type="text" id='c1' disabled={troca !== 'c'} onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='c2' disabled={troca !== 'c'} onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='c3' disabled={troca !== 'c'} onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='c4' disabled={troca !== 'c'} onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='c5' disabled={troca !== 'c'} onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                    </div>
                </div>
                <div className={styles.gameLine}>
                    <div className={styles.containerInput}>
                        <input type="text" id='d1' disabled={troca !== 'd'} onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='d2' disabled={troca !== 'd'} onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='d3' disabled={troca !== 'd'} onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='d4' disabled={troca !== 'd'} onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='d5' disabled={troca !== 'd'} onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                    </div>
                </div>
                <div className={styles.gameLine}>
                    <div className={styles.containerInput}>
                        <input type="text" id='e1' disabled={troca !== 'e'} onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='e2' disabled={troca !== 'e'} onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='e3' disabled={troca !== 'e'} onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='e4' disabled={troca !== 'e'} onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='e5' disabled={troca !== 'e'} onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                    </div>
                </div>
                <div className={styles.gameLine}>
                    <div className={styles.containerInput}>
                        <input type="text" id='f1' disabled={troca !== 'f'} onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='f2' disabled={troca !== 'f'} onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='f3' disabled={troca !== 'f'} onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='f4' disabled={troca !== 'f'} onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                        <input type="text" id='f5' disabled={troca !== 'f'} onChange={handleChange} onKeyDown={handleKeyDown} maxLength="1" />
                    </div>
                </div>
            </div>
        </div>
    );
}
